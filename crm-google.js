const CrmGoogle = (() => {
  const sources = {
    objects: {
      id: "1F61V4ixhdLUiLa1jIIzwqydIJ7E3hjVYj1TJFcrfXZ4",
      sheet: "Лист1",
    },
    activeEstimate: {
      id: "1zVKZ6IrFY5RlruPvKlTjibdDbaqPr4kVgYNokngrAjU",
      summarySheet: "Итог",
      checksSheet: "Чеки",
      roomSheets: ["Коридор", "Комната", "Санузел", "Кухня", "Электрика"],
    },
  };

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let value = "";
    let quoted = false;
    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      const next = text[index + 1];
      if (char === '"' && quoted && next === '"') {
        value += '"';
        index += 1;
      } else if (char === '"') {
        quoted = !quoted;
      } else if (char === "," && !quoted) {
        row.push(value);
        value = "";
      } else if ((char === "\n" || char === "\r") && !quoted) {
        if (char === "\r" && next === "\n") index += 1;
        row.push(value);
        if (row.some((cell) => cell.trim() !== "")) rows.push(row);
        row = [];
        value = "";
      } else {
        value += char;
      }
    }
    row.push(value);
    if (row.some((cell) => cell.trim() !== "")) rows.push(row);
    return rows;
  }

  function googleCsvUrl(id, sheet) {
    return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheet)}`;
  }

  async function fetchSheet(id, sheet) {
    const response = await fetch(googleCsvUrl(id, sheet), { cache: "no-store" });
    if (!response.ok) throw new Error(`Google вернул ${response.status}`);
    return parseCsv(await response.text());
  }

  function parseMoney(value) {
    const normalized = String(value || "").replace(/\s/g, "").replace(",", ".").replace(/[^\d.-]/g, "");
    return Number(normalized) || 0;
  }

  function parseObjects(rows) {
    return rows
      .slice(1)
      .filter((row) => row[0] || row[5])
      .map((row, index, dataRows) => {
        const estimateUrl = row[7] || "";
        const estimateId = estimateUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)?.[1] || "";
        const linkedFinance = estimateUrl.includes(sources.activeEstimate.id);
        return {
          id: linkedFinance ? "obj-008" : estimateId || `sheet-obj-${index + 1}`,
          task: row[0] || "Без задачи",
          type: row[1] || "Не указан",
          status: row[2] || "Без статуса",
          phone: row[3] || "",
          name: row[4] || "-",
          address: row[5] || "",
          startDate: row[6] || "",
          estimateUrl,
          estimateId,
          linkedFinance,
          unsupportedEstimate: Boolean(estimateUrl && !linkedFinance && index < Math.max(0, dataRows.length - 4)),
        };
      });
  }

  function parseSummary(rows) {
    const summary = {
      laborTotal: 0,
      materials: 0,
      received: 0,
      separateWorks: 0,
    };
    rows.forEach((row) => {
      const key = String(row[0] || "").trim().toLowerCase();
      if (key === "общий итог") summary.laborTotal = parseMoney(row[1]);
      if (key === "материалы") summary.materials = parseMoney(row[1]);
      if (key === "полученно" || key === "получено") summary.received = parseMoney(row[1]);
      if (key === "отдельные работы") summary.separateWorks = parseMoney(row[1]);
    });
    return summary;
  }

  function parseChecks(rows) {
    return rows
      .slice(1)
      .filter((row) => row[0] && row[1])
      .map((row) => [row[0], parseMoney(row[1])])
      .filter((check) => check[1] > 0);
  }

  function parseRoom(sheetName, rows) {
    const metrics = {};
    let total = 0;
    rows.forEach((row) => {
      const label = String(row[0] || "").trim();
      if (label.includes("Площадь стен (полная)")) metrics["Стены полная"] = `${row[2] || ""} м2`;
      if (label.includes("Площадь стен (раб)")) metrics["Стены рабочая"] = `${row[2] || ""} м2`;
      if (label.includes("Площадь пола")) metrics["Пол"] = `${row[2] || ""} м2`;
      if (label.includes("Перим")) metrics["Периметр"] = `${row[2] || ""} м`;
      if (label.includes("Итоговая сумма")) total = parseMoney(row[2]);
    });

    const works = [];
    const headerBlocks = [];
    rows.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (String(cell || "").trim().includes("Вид работы")) {
          const stageLabel = String(rows[rowIndex - 1]?.[colIndex] || "").trim();
          headerBlocks.push({
            rowIndex,
            colIndex,
            stage: stageLabel || (colIndex === 0 ? "Черновые работы" : "Чистовые работы"),
          });
        }
      });
    });

    headerBlocks.forEach((block) => {
      rows.slice(block.rowIndex + 1).forEach((row) => {
        const label = String(row[block.colIndex] || "").trim();
        if (!label || label === "Итог" || label.includes("Площадь") || label.includes("Перим") || label.includes("Итоговая сумма")) return;
        const price = parseMoney(row[block.colIndex + 1]);
        const qty = parseMoney(row[block.colIndex + 2]);
        const area = row[block.colIndex + 3] || "";
        const lineTotal = parseMoney(row[block.colIndex + 4]);
        if (price || qty || lineTotal) works.push([block.stage, label, price, qty, area, lineTotal]);
      });
    });

    if (!total) total = works.reduce((sum, work) => sum + work[5], 0);
    return { name: sheetName, total, metrics, works };
  }

  async function loadActiveEstimate() {
    const [objectsRows, summaryRows, checksRows, roomRows] = await Promise.all([
      fetchSheet(sources.objects.id, sources.objects.sheet),
      fetchSheet(sources.activeEstimate.id, sources.activeEstimate.summarySheet),
      fetchSheet(sources.activeEstimate.id, sources.activeEstimate.checksSheet),
      Promise.all(sources.activeEstimate.roomSheets.map(async (sheetName) => [sheetName, await fetchSheet(sources.activeEstimate.id, sheetName)])),
    ]);
    const objects = parseObjects(objectsRows);
    const activeObject = objects.find((object) => object.linkedFinance) || objects.find((object) => object.id === "obj-008") || {};
    const summary = parseSummary(summaryRows);
    const rooms = roomRows.map(([sheetName, rows]) => parseRoom(sheetName, rows));
    const checks = parseChecks(checksRows);
    const roomTotal = rooms.reduce((sum, room) => sum + room.total, 0);
    const laborTotal = summary.laborTotal || roomTotal;
    const totalCost = laborTotal + summary.materials + summary.separateWorks;
    return {
      activeObject,
      summary: {
        ...summary,
        laborTotal,
        roomTotal,
        totalCost,
        balance: summary.received - totalCost,
      },
      rooms,
      checks,
    };
  }

  return {
    fetchSheet,
    loadActiveEstimate,
    parseChecks,
    parseMoney,
    parseRoom,
    parseSummary,
    sources,
  };
})();
