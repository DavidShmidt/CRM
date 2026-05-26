const crmData = {
  objectName: "Волховстроя 20, кв 74",
  received: 250000,
  materials: 48886,
  separateWorks: 13000,
  objects: [
    {
      id: "obj-001",
      task: "Укладка ламината с подложкой",
      type: "Монозаказ",
      status: "Выполнено",
      phone: "79136583596",
      name: "-",
      address: "Стальского, 6, кв. 119",
      startDate: "04.01.2025",
      estimateUrl: "",
    },
    {
      id: "obj-002",
      task: "Санузел",
      type: "Под ключ",
      status: "Выполнено",
      phone: "79048233314",
      name: "Лилия Андреевна",
      address: "Крупской улица, 27/2, кв. 120",
      startDate: "28.02.2025",
      estimateUrl: "",
    },
    {
      id: "obj-003",
      task: "Кухня",
      type: "Под ключ",
      status: "Выполнено",
      phone: "79293668114",
      name: "Всеслава",
      address: "22 Апреля, 30Б, кв. 47",
      startDate: "21.04.2025",
      estimateUrl: "",
    },
    {
      id: "obj-004",
      task: "Кухня, коридор",
      type: "Под ключ",
      status: "Отменен",
      phone: "79514208369",
      name: "Тамара",
      address: "Малиновского, 14/2",
      startDate: "20.12.2025",
      estimateUrl: "https://docs.google.com/spreadsheets/d/1Pr8XgcRFWsWd9P-7sS4st03joZfj70-s-Zm3nJThCSU/edit?usp=sharing",
    },
    {
      id: "obj-005",
      task: "Санузел",
      type: "Под ключ",
      status: "Выполнено",
      phone: "79136745331",
      name: "Татьяна",
      address: "2-я кольцевая, 3/1 кв. 3",
      startDate: "05.08.2025",
      estimateUrl: "https://docs.google.com/spreadsheets/d/1y4F3C6JymFe60bBYkX6HT3lRFFc8MWWxwsvo0UQodjY/edit?usp=sharing",
    },
    {
      id: "obj-006",
      task: "Комната",
      type: "Под ключ",
      status: "Выполнено",
      phone: "79994581648",
      name: "Роман",
      address: "Нейбута 64, кв. 8",
      startDate: "12.01.2026",
      estimateUrl: "https://docs.google.com/spreadsheets/d/1Jn4ytqJfhzZwPPWCcO2KJSeLUxAHGs7mmk3Wi6NyQ7s/edit?usp=sharing",
    },
    {
      id: "obj-007",
      task: "Квартира (санузел уже выполнен)",
      type: "Под ключ",
      status: "Выполняется",
      phone: "79136745331",
      name: "Татьяна",
      address: "2-я кольцевая, 3/1, кв. 3",
      startDate: "04.04.2026",
      estimateUrl: "https://docs.google.com/spreadsheets/d/1ueeb0AKns5tZeihpuoaXeJnOXSNYSFqYQZ2ursVfYjo/edit?usp=sharing",
    },
    {
      id: "obj-008",
      task: "Квартира",
      type: "Под ключ",
      status: "Выполняется",
      phone: "79139650525",
      name: "Евгений Владимирович",
      address: "Волховстроя, 20, кв. 74",
      startDate: "09.03.2026",
      estimateUrl: "https://docs.google.com/spreadsheets/d/1zVKZ6IrFY5RlruPvKlTjibdDbaqPr4kVgYNokngrAjU/edit?usp=sharing",
      linkedFinance: true,
    },
    {
      id: "obj-009",
      task: "Плиточные работы",
      type: "Монозаказ",
      status: "Не начато",
      phone: "79088089660",
      name: "Дмитрий",
      address: "д.п. Чернолучинский, ул. Сосновая, д. 11",
      startDate: "",
      estimateUrl: "https://docs.google.com/spreadsheets/d/1ZSKuhKP0K1hrfYOaB9BhyfU6VmawKQq1irGRYair8vI/edit?usp=sharing",
    },
    {
      id: "obj-010",
      task: "Квартира",
      type: "Под ключ",
      status: "Не начато",
      phone: "79831131404",
      name: "Сергей, Анастасия (мать)",
      address: "Звездова 132, кв. 58",
      startDate: "",
      estimateUrl: "https://docs.google.com/spreadsheets/d/1h1RVjQyl9pJIQ5wcBgKmSrLQQX3K6BRdU14OnhKjzrY/edit?usp=sharing",
    },
  ],
  rooms: [
    {
      name: "Коридор",
      total: 19507,
      metrics: {
        "Площадь стен полная": "30,0",
        "Площадь стен рабочая": "22,2",
        "Площадь пола": "5,5",
        "Периметр": "9,6",
      },
      works: [
        ["Зачистка стен чашкой", 500, 1, "22,2", 11108],
        ["Демонтаж плинтусов", 150, 1, "5,7", 858],
        ["Снятие обоев", 200, 1, "12,4", 2490],
        ["Демонтаж межкомнатной двери", 1100, 4, "1,0", 4400],
        ["Демонтаж потолочной плитки", 220, 1, "3,0", 651],
      ],
    },
    {
      name: "Комната",
      total: 40020,
      metrics: {
        "Площадь стен полная": "47,6",
        "Площадь стен рабочая": "42,0",
        "Площадь пола": "19,2",
        "Периметр": "17,2",
      },
      works: [
        ["Зачистка стен чашкой", 500, 1, "42,0", 20999],
        ["Демонтаж линолеума", 200, 1, "19,2", 3831],
        ["Демонтаж плинтусов", 150, 1, "17,2", 2577],
        ["Снятие обоев", 200, 1, "42,0", 8399],
        ["Демонтаж потолочной плитки", 220, 1, "19,2", 4214],
      ],
    },
    {
      name: "Санузел",
      total: 51158,
      metrics: {
        "Площадь стен полная": "18,5",
        "Площадь стен рабочая": "17,1",
        "Площадь пола": "3,4",
        "Периметр": "7,4",
      },
      works: [
        ["Зачистка стен чашкой", 500, 1, "17,1", 8550],
        ["Зачистка пола чашкой", 500, 2, "3,4", 4406],
        ["Замена канализационного стояка", 2500, 1, "1", 2500],
        ["Нанесение грунтовки на стены", 100, 1, "17,1", 1710],
        ["Нанесение грунтовки на пол", 100, 2, "3,4", 681],
        ["Оштукатуривание стен", 740, 1, "14,7", 10863],
        ["Устройство самовыравнивающейся стяжки пола", 600, 1, "3,4", 2043],
        ["Демонтаж керамической плитки", 420, 1, "20,5", 8612],
        ["Демонтаж ванны", 2000, 1, "1,0", 2000],
        ["Демонтаж унитаза", 1300, 1, "1,0", 1300],
        ["Демонтаж раковины", 1000, 1, "1,0", 1000],
        ["Гидроизоляция", 200, 2, "3,4", 1362],
        ["Облицовка пола керамогранитом", 2200, 1, "3,4", 7492],
      ],
    },
    {
      name: "Кухня",
      total: 39713,
      metrics: {
        "Площадь стен полная": "32,8",
        "Площадь стен рабочая": "27,8",
        "Площадь пола": "9,1",
        "Периметр": "11,5",
      },
      works: [
        ["Зачистка стен чашкой", 500, 1, "27,8", 13885],
        ["Демонтаж линолеума", 200, 1, "9,1", 1819],
        ["Демонтаж плинтусов", 150, 1, "11,5", 1722],
        ["Демонтаж керамической плитки", 420, 1, "13,7", 5741],
        ["Нанесение грунтовки на стены", 100, 1, "5,6", 565],
        ["Оштукатуривание стен", 740, 1, "5,6", 4181],
        ["Монтаж кухонного фартука из крупноформатного керамогранита", 3000, 1, "2,9", 8640],
        ["Устройство отверстий в керамогранитной плитке", 790, 4, "1,0", 3160],
      ],
    },
    {
      name: "Электрика",
      total: 54960,
      metrics: {
        "Точек": "25",
        "Штробы": "28",
        "Кабель": "127",
        "Раздел": "Инженерия",
      },
      works: [
        ["Высверливание подрозетника в бетоне", 500, 25, "1", 12500],
        ["Монтаж подрозетника на раствор", 210, 25, "1", 5250],
        ["Установка механизма розетки в подрозетник", 470, 25, "0", 0],
        ["Штробление", 650, 28, "1", 18200],
        ["Штукатурка штроб", 180, 28, "1", 5040],
        ["Прокладка кабеля", 110, 127, "1", 13970],
        ["Сборка распаячной коробки", 1500, 0, "1", 0],
        ["Монтаж электрощита", 8000, 0, "1", 0],
        ["Демонтаж местной проводки", 2000, 0, "1", 0],
      ],
    },
  ],
  checks: [
    ["31.03", 3043],
    ["06.04", 2267],
    ["07.04", 827],
    ["08.04", 666],
    ["09.04", 1399],
    ["10.04", 3668],
    ["10.04", 408],
    ["13.04", 359],
    ["28.04", 4834],
    ["28.04", 2385],
    ["02.05", 248],
    ["09.05", 4219],
    ["15.05", 3367],
    ["16.05", 1829],
    ["18.05", 1590],
    ["19.05", 835],
    ["20.05", 13985],
    ["20.05", 1193],
    ["20.05", 819],
    ["22.05", 136],
    ["22.05", 160],
    ["23.05", 649],
  ],
};

const googleSources = {
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

const formatRub = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

const state = {
  view: "objects",
  status: "all",
  type: "all",
  search: "",
  selectedObjectId: "obj-008",
  objectOpen: false,
  estimateLoadedFor: "obj-008",
  estimateLoadingFor: null,
  estimateErrorFor: null,
  estimateMessage: "",
};

const els = {
  appShell: document.querySelector(".app-shell"),
  viewTitle: document.querySelector("#viewTitle"),
  viewEyebrow: document.querySelector("#viewEyebrow"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  syncGoogle: document.querySelector("#syncGoogle"),
  syncStatus: document.querySelector("#syncStatus"),
  objectsTotal: document.querySelector("#objectsTotal"),
  activeObjects: document.querySelector("#activeObjects"),
  newObjects: document.querySelector("#newObjects"),
  estimateObjects: document.querySelector("#estimateObjects"),
  objectsBoard: document.querySelector("#objectsBoard"),
  clientPanel: document.querySelector("#clientPanel"),
  laborTotal: document.querySelector("#laborTotal"),
  materialsTotal: document.querySelector("#materialsTotal"),
  receivedTotal: document.querySelector("#receivedTotal"),
  balanceTotal: document.querySelector("#balanceTotal"),
  paymentStatus: document.querySelector("#paymentStatus"),
  costProgress: document.querySelector("#costProgress"),
  costProgressLabel: document.querySelector("#costProgressLabel"),
  moneyBreakdown: document.querySelector("#moneyBreakdown"),
  roomBars: document.querySelector("#roomBars"),
  roomCards: document.querySelector("#roomCards"),
  worksBoard: document.querySelector("#worksBoard"),
  checksList: document.querySelector("#checksList"),
  checksTimeline: document.querySelector("#checksTimeline"),
  checksCount: document.querySelector("#checksCount"),
};

let laborTotal = 0;
let totalCost = 0;
let balance = 0;

function recalcTotals() {
  laborTotal = crmData.rooms.reduce((sum, room) => sum + room.total, 0);
  totalCost = laborTotal + crmData.materials + crmData.separateWorks;
  balance = crmData.received - totalCost;
}

recalcTotals();

function selectedObject() {
  return crmData.objects.find((item) => item.id === state.selectedObjectId) || crmData.objects[0];
}

function currentObjectHasDetails() {
  return Boolean(selectedObject()?.linkedFinance);
}

function isRecentObject(index, total) {
  return index >= Math.max(0, total - 4);
}

function selectedEstimateStatus() {
  const object = selectedObject();
  if (!object?.estimateUrl) return "no-link";
  if (object.unsupportedEstimate) return "unsupported";
  if (!object.linkedFinance) return "not-connected";
  if (state.estimateLoadingFor === object.id) return "loading";
  if (state.estimateErrorFor === object.id) return "error";
  if (currentObjectHasDetails()) return "loaded";
  return "not-loaded";
}

function allWorks() {
  return crmData.rooms.flatMap((room) =>
    room.works.map((work) => ({
      room: room.name,
      title: work[0],
      price: work[1],
      qty: work[2],
      area: work[3],
      total: work[4],
      stage: work[5] || detectStage(work[0]),
    })),
  );
}

function detectStage(title) {
  const finishWords = ["облицовка", "фартук", "керамогранит", "механизма розетки", "электрощит"];
  return finishWords.some((word) => title.toLowerCase().includes(word)) ? "Чистовые работы" : "Черновые работы";
}

function matchesSearch(values) {
  if (!state.search) return true;
  return values.join(" ").toLowerCase().includes(state.search.toLowerCase());
}

function filteredWorks() {
  return allWorks().filter((work) => {
    return matchesSearch([work.room, work.stage, work.title, work.price, work.qty, work.area, work.total]);
  });
}

function filteredObjects() {
  return crmData.objects.filter((object) => {
    const statusOk = state.status === "all" || object.status === state.status;
    const typeOk = state.type === "all" || object.type === state.type;
    return statusOk && typeOk && matchesSearch([object.task, object.type, object.status, object.phone, object.name, object.address, object.startDate]);
  });
}

function setView(viewName) {
  if (viewName !== "objects" && !state.objectOpen) {
    return;
  }
  if (viewName === "objects") {
    state.objectOpen = false;
    state.search = "";
    els.searchInput.value = "";
  }
  state.view = viewName;
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewName));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewName));
  const labels = { objects: "Объекты", overview: "Обзор", rooms: "Помещения", works: "Работы", checks: "Чеки" };
  const object = selectedObject();
  els.viewTitle.textContent = viewName === "objects" ? labels[viewName] : `${labels[viewName]}: ${object.address}`;
  els.viewEyebrow.textContent = viewName === "objects" ? "Панель управления объектами" : `${object.task} · ${object.status}`;
  document.body.classList.toggle("object-open", state.objectOpen);
}

function renderFilters() {
  const statuses = [...new Set(crmData.objects.map((object) => object.status))];
  const types = [...new Set(crmData.objects.map((object) => object.type))];
  els.statusFilter.innerHTML = `<option value="all">Все статусы</option>${statuses.map((status) => `<option value="${status}">${status}</option>`).join("")}`;
  els.typeFilter.innerHTML = `<option value="all">Все типы</option>${types.map((type) => `<option value="${type}">${type}</option>`).join("")}`;
  els.statusFilter.value = state.status;
  els.typeFilter.value = state.type;
}

function whatsappHref(phone) {
  return `https://wa.me/${phone}`;
}

function telegramHref(phone) {
  return `https://t.me/+${phone}`;
}

function contactMenu(object) {
  return `<details class="contact-menu">
    <summary class="contact-summary">Связаться</summary>
    <div class="contact-options">
      <a href="${whatsappHref(object.phone)}" target="_blank" rel="noreferrer">WhatsApp</a>
      <a href="${telegramHref(object.phone)}" target="_blank" rel="noreferrer">Telegram</a>
      <a href="sms:+${object.phone}">SMS</a>
    </div>
  </details>`;
}

function mapUrl(address, provider) {
  const query = encodeURIComponent(cleanMapAddress(address));
  if (provider === "2gis") return `https://2gis.ru/search/${query}`;
  return `https://yandex.ru/maps/?text=${query}`;
}

function mapEmbedUrl(address) {
  return `https://yandex.ru/map-widget/v1/?mode=search&text=${encodeURIComponent(cleanMapAddress(address))}&z=16`;
}

function cleanMapAddress(address) {
  return `Омск, ${String(address || "")
    .replace(/\s+/g, " ")
    .replace(/,?\s*(кв\.?|квартира|подъезд|п\.?д\.?)\s*[^,]+/gi, "")
    .replace(/,\s*$/g, "")
    .trim()}`;
}

function nextActionFor(object) {
  if (object.status === "Не начато") return object.estimateUrl ? "Уточнить дату старта" : "Подготовить смету";
  if (object.status === "Выполняется" && object.linkedFinance) return balance < 0 ? "Согласовать доплату" : "Проверить этап работ";
  if (object.status === "Выполняется") return "Обновить статус работ";
  if (object.status === "Выполнено") return "Архивировать после оплаты";
  return "Не требует действий";
}

function statusOrder(status) {
  return { "Выполняется": 1, "Не начато": 2, "Выполнено": 3, "Отменен": 4 }[status] || 9;
}

function statusClass(status) {
  if (status === "Выполняется") return "status-active";
  if (status === "Не начато") return "status-new";
  if (status === "Выполнено") return "status-done";
  if (status === "Отменен") return "status-cancelled";
  return "status-neutral";
}

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

async function fetchGoogleSheet(id, sheet) {
  const response = await fetch(googleCsvUrl(id, sheet), { cache: "no-store" });
  if (!response.ok) throw new Error(`Google вернул ${response.status}`);
  return parseCsv(await response.text());
}

function parseMoney(value) {
  const normalized = String(value || "").replace(/\s/g, "").replace(",", ".").replace(/[^\d.-]/g, "");
  return Number(normalized) || 0;
}

function parseObjectsSheet(rows) {
  const dataRows = rows
    .slice(1)
    .filter((row) => row[0] || row[5]);
  return dataRows.map((row, index) => {
      const estimateUrl = row[7] || "";
      const estimateId = estimateUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)?.[1] || "";
      const linkedFinance = estimateUrl.includes(googleSources.activeEstimate.id);
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
        unsupportedEstimate: Boolean(estimateUrl && !linkedFinance && !isRecentObject(index, dataRows.length)),
      };
    });
}

function parseSummarySheet(rows) {
  crmData.materials = 0;
  crmData.received = 0;
  crmData.separateWorks = 0;
  rows.forEach((row) => {
    const key = String(row[0] || "").trim().toLowerCase();
    if (key === "материалы") crmData.materials = parseMoney(row[1]);
    if (key === "полученно" || key === "получено") crmData.received = parseMoney(row[1]);
    if (key === "отдельные работы") crmData.separateWorks = parseMoney(row[1]);
  });
}

function parseChecksSheet(rows) {
  return rows
    .slice(1)
    .filter((row) => row[0] && row[1])
    .map((row) => [row[0], parseMoney(row[1])])
    .filter((check) => check[1] > 0);
}

function isSummarySheet(name) {
  return String(name).trim().toLowerCase() === "итог";
}

function isChecksSheet(name) {
  const normalized = String(name).trim().toLowerCase();
  return normalized === "чеки" || normalized === "чек";
}

function isLikelyWorkSheet(name) {
  const normalized = String(name).trim().toLowerCase();
  if (isSummarySheet(normalized) || isChecksSheet(normalized)) return false;
  return !["справочник", "настройки", "листы", "прайс", "цены", "размеры"].includes(normalized);
}

function parseRoomSheet(sheetName, rows) {
  const metrics = {};
  let total = 0;
  rows.forEach((row) => {
    const label = String(row[0] || "").trim();
    if (label.includes("Площадь стен (полная)")) metrics["Площадь стен полная"] = row[2] || "";
    if (label.includes("Площадь стен (раб)")) metrics["Площадь стен рабочая"] = row[2] || "";
    if (label.includes("Площадь пола")) metrics["Площадь пола"] = row[2] || "";
    if (label.includes("Перим")) metrics["Периметр"] = row[2] || "";
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
      if (price || qty || lineTotal) works.push([label, price, qty, area, lineTotal, block.stage]);
    });
  });

  if (!total) total = works.reduce((sum, work) => sum + work[4], 0);
  return { name: sheetName, total, metrics, works };
}

async function refreshFromGoogle() {
  els.syncStatus.textContent = "Обновляю...";
  els.syncGoogle.disabled = true;
  try {
    const previousObject = selectedObject();
    const objectsRows = await fetchGoogleSheet(googleSources.objects.id, googleSources.objects.sheet);
    const summaryRows = await fetchGoogleSheet(googleSources.activeEstimate.id, googleSources.activeEstimate.summarySheet);
    const checksRows = await fetchGoogleSheet(googleSources.activeEstimate.id, googleSources.activeEstimate.checksSheet);
    const roomRows = await Promise.all(
      googleSources.activeEstimate.roomSheets.map(async (sheetName) => [sheetName, await fetchGoogleSheet(googleSources.activeEstimate.id, sheetName)]),
    );
    crmData.objects = parseObjectsSheet(objectsRows);
    const refreshedSelection =
      crmData.objects.find((object) => object.id === state.selectedObjectId) ||
      crmData.objects.find((object) => previousObject?.estimateUrl && object.estimateUrl === previousObject.estimateUrl) ||
      crmData.objects.find((object) => previousObject?.phone && object.phone === previousObject.phone && object.address === previousObject.address);
    state.selectedObjectId = refreshedSelection?.id || crmData.objects[0]?.id || "";
    parseSummarySheet(summaryRows);
    crmData.checks = parseChecksSheet(checksRows);
    crmData.rooms = roomRows.map(([sheetName, rows]) => parseRoomSheet(sheetName, rows));
    recalcTotals();
    renderFilters();
    renderAll();
    els.syncStatus.textContent = `Обновлено ${new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })}`;
  } catch (error) {
    els.syncStatus.textContent = "Google не отдал данные";
    console.warn("Google sync failed", error);
  } finally {
    els.syncGoogle.disabled = false;
  }
}

async function loadEstimateForSelected({ silent = false } = {}) {
  return currentObjectHasDetails();
}

function renderObjects() {
  const objects = filteredObjects().sort((a, b) => statusOrder(a.status) - statusOrder(b.status));
  if (!state.objectOpen && objects.length && !objects.some((object) => object.id === state.selectedObjectId)) {
    state.selectedObjectId = objects[0].id;
  }
  els.objectsTotal.textContent = crmData.objects.length;
  els.activeObjects.textContent = crmData.objects.filter((object) => object.status === "Выполняется").length;
  els.newObjects.textContent = crmData.objects.filter((object) => object.status === "Не начато").length;
  els.estimateObjects.textContent = crmData.objects.filter((object) => object.estimateUrl).length;

  if (!objects.length) {
    els.objectsBoard.innerHTML = `<p class="empty">Объекты не найдены</p>`;
    renderClientPanel();
    return;
  }

  els.objectsBoard.innerHTML = `<div class="object-list unified-object-list">
      ${objects
        .map((object) => {
          const active = object.id === state.selectedObjectId ? "active" : "";
            const estimate = object.estimateUrl ? `<a class="action-link" href="${object.estimateUrl}" target="_blank" rel="noreferrer">${object.unsupportedEstimate ? "Смета в Google" : "Смета"}</a>` : "";
            const supportBadge = object.unsupportedEstimate ? `<span class="pill warning-pill">Расчеты в Google</span>` : "";
            return `<article class="object-card ${active}" data-object-id="${object.id}">
              <div class="object-card-head">
                <h3>${object.task}</h3>
                <span class="status-chip ${statusClass(object.status)}">${object.status}</span>
              </div>
              <p>${object.address}</p>
              <p class="client-line">${object.name} · ${object.phone}</p>
              <div class="object-meta">
                <span class="pill">${object.type}</span>
                <span class="pill">${object.startDate || "Дата не указана"}</span>
                ${supportBadge}
              </div>
              <div class="object-actions">
                ${contactMenu(object)}
                ${estimate}
              </div>
            </article>`;
        })
        .join("")}
    </div>`;

  renderClientPanel();
}

function renderClientPanel() {
  const object = selectedObject() || filteredObjects()[0] || crmData.objects[0];
  if (!object) {
    els.clientPanel.innerHTML = `<p class="empty">Выберите объект</p>`;
    return;
  }
  const estimateStatus = selectedEstimateStatus();
  const finance = currentObjectHasDetails()
    ? `<div class="finance-mini">
        <div class="breakdown-row"><span>Работы</span><strong>${formatRub.format(laborTotal)}</strong></div>
        <div class="breakdown-row"><span>Материалы</span><strong>${formatRub.format(crmData.materials)}</strong></div>
        <div class="breakdown-row"><span>Получено</span><strong>${formatRub.format(crmData.received)}</strong></div>
        <div class="breakdown-row"><span>Остаток</span><strong>${formatRub.format(balance)}</strong></div>
      </div>`
    : `<div class="finance-mini"><p>${estimateStatus === "unsupported" ? "Эта старая смета не поддерживается в CRM. Расчеты смотри в Google-таблице." : estimateStatus === "not-connected" ? "Смета есть, но расчет в CRM пока не подключен. Расчеты смотри в Google-таблице." : estimateStatus === "loading" ? "Смета загружается..." : estimateStatus === "error" ? `Смета не загрузилась. ${state.estimateMessage}` : object.estimateUrl ? "Смету можно открыть в Google-таблице." : "У объекта нет ссылки на смету."}</p></div>`;
  const estimate = object.estimateUrl ? `<a class="action-link primary" href="${object.estimateUrl}" target="_blank" rel="noreferrer">Открыть смету</a>` : "";
  const clientPage = object.linkedFinance ? `<a class="action-link" href="client.html?object=${object.id}" target="_blank" rel="noreferrer">Страница клиента</a>` : "";
  const openButton = !object.linkedFinance
    ? `<a class="action-link primary" href="${object.estimateUrl}" target="_blank" rel="noreferrer">Открыть смету Google</a>`
    : `<button class="action-button primary-action" data-open-object="${object.id}" type="button">Открыть объект</button>`;
  els.clientPanel.innerHTML = `<p class="eyebrow">Карточка клиента</p>
    <h3>${object.task}</h3>
    <p>${nextActionFor(object)}</p>
    <div class="object-actions client-main-actions">
      ${openButton}
      ${contactMenu(object)}
    </div>
    <div class="client-details">
      <div class="detail-row"><span>Клиент</span><strong>${object.name}</strong></div>
      <div class="detail-row"><span>Телефон</span><strong>${object.phone}</strong></div>
      <div class="detail-row"><span>Адрес</span><strong>${object.address}</strong></div>
      <div class="detail-row"><span>Тип / статус</span><strong>${object.type} · ${object.status}</strong></div>
      <div class="detail-row"><span>Дата начала</span><strong>${object.startDate || "Не указана"}</strong></div>
    </div>
    <div class="map-card">
      <div class="map-frame">
        <iframe title="Карта объекта" src="${mapEmbedUrl(object.address)}" loading="lazy"></iframe>
        <div class="map-marker" aria-hidden="true">
          <span class="map-pin"></span>
          <span class="map-label">${cleanMapAddress(object.address).replace(/^Омск,\s*/i, "")}</span>
        </div>
      </div>
      <div class="object-actions">
        <a class="action-link" href="${mapUrl(object.address, "yandex")}" target="_blank" rel="noreferrer">Яндекс Карты</a>
        <a class="action-link" href="${mapUrl(object.address, "2gis")}" target="_blank" rel="noreferrer">2ГИС</a>
      </div>
    </div>
    ${finance}
    <div class="object-actions">
      ${estimate}
      ${clientPage}
    </div>`;
}

function renderOverview() {
  if (!currentObjectHasDetails()) {
    els.laborTotal.textContent = "—";
    els.materialsTotal.textContent = "—";
    els.receivedTotal.textContent = "—";
    els.balanceTotal.textContent = "—";
    const status = selectedEstimateStatus();
    els.paymentStatus.textContent = status === "loading" ? "Загружаю смету" : status === "error" ? "Смета не подходит" : "Смета не подключена";
    els.costProgress.style.width = "0%";
    els.costProgressLabel.textContent = "0%";
    els.moneyBreakdown.innerHTML = `<p class="empty">${status === "unsupported" ? "Эта смета относится к старым объектам и не поддерживается в CRM. Расчеты смотри в Google-таблице." : status === "not-connected" ? "Расчет этой сметы пока не подключен к CRM. Открой Google-таблицу сметы." : status === "loading" ? "Сейчас пробую прочитать смету по ссылке из таблицы объектов." : status === "error" ? `CRM нашла ссылку на смету, но не смогла разобрать ее. ${state.estimateMessage}` : "Для этого объекта пока доступна только карточка и ссылка на смету."}</p>`;
    els.roomBars.innerHTML = "";
    return;
  }
  els.laborTotal.textContent = formatRub.format(laborTotal);
  els.materialsTotal.textContent = formatRub.format(crmData.materials);
  els.receivedTotal.textContent = crmData.received ? formatRub.format(crmData.received) : "Не указано";
  els.balanceTotal.textContent = crmData.received ? formatRub.format(balance) : "—";
  els.paymentStatus.textContent = crmData.received ? (balance >= 0 ? "Деньги сходятся" : "Нужно добрать оплату") : "Оплата не указана";

  const percent = crmData.received ? Math.min(Math.round((totalCost / crmData.received) * 100), 100) : 0;
  els.costProgress.style.width = `${percent}%`;
  els.costProgressLabel.textContent = `${percent}%`;

  els.moneyBreakdown.innerHTML = [
    ["Работы по помещениям", laborTotal],
    ["Отдельные работы", crmData.separateWorks],
    ["Материалы", crmData.materials],
    ["Всего затрат", totalCost],
    ["Остаток после затрат", balance],
  ]
    .map(([label, value]) => `<div class="breakdown-row"><span>${label}</span><strong>${formatRub.format(value)}</strong></div>`)
    .join("");

  const maxRoom = Math.max(...crmData.rooms.map((room) => room.total));
  els.roomBars.innerHTML = crmData.rooms
    .slice()
    .sort((a, b) => b.total - a.total)
    .map((room) => {
      const width = Math.max(8, Math.round((room.total / maxRoom) * 100));
      return `<div class="bar-row">
        <div class="bar-meta"><strong>${room.name}</strong><span>${formatRub.format(room.total)}</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
      </div>`;
    })
    .join("");
}

function renderRooms() {
  if (!currentObjectHasDetails()) {
    const status = selectedEstimateStatus();
    els.roomCards.innerHTML = `<p class="empty">${status === "unsupported" ? "Старая смета не поддерживается в CRM. Помещения смотри в Google-таблице." : status === "not-connected" ? "Помещения этой сметы пока смотри в Google-таблице." : status === "loading" ? "Загружаю помещения из сметы..." : status === "error" ? "Не получилось разобрать помещения в этой смете." : "Помещения появятся после подключения сметы выбранного объекта."}</p>`;
    return;
  }
  els.roomCards.innerHTML = crmData.rooms
    .filter((room) => matchesSearch([room.name, ...Object.values(room.metrics)]))
    .map((room) => {
      const metrics = Object.entries(roomCardMetrics(room))
        .map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`)
        .join("");
      return `<article class="room-card">
        <div class="room-card-head">
          <h3>${room.name}</h3>
          <strong class="room-sum">${formatRub.format(room.total)}</strong>
        </div>
        <dl>${metrics}</dl>
        <div class="room-total"><span>Работ</span><strong>${room.works.length}</strong></div>
      </article>`;
    })
    .join("");
}

function sumWorkQuantity(room, patterns) {
  return room.works
    .filter((work) => patterns.some((pattern) => pattern.test(work[0])))
    .reduce((sum, work) => sum + (Number(work[2]) || 0), 0);
}

function formatMetricNumber(value) {
  if (!value) return "";
  return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(1)));
}

function roomCardMetrics(room) {
  const metrics = { ...room.metrics };
  const socketCount = sumWorkQuantity(room, [/розет/i, /подрозет/i, /выключ/i]);
  const chaseLength = sumWorkQuantity(room, [/штроб/i]);
  const cableLength = sumWorkQuantity(room, [/кабел/i, /провод/i]);

  if (socketCount) metrics["Точки"] = formatMetricNumber(socketCount);
  if (chaseLength) metrics["Штробы"] = `${formatMetricNumber(chaseLength)} м`;
  if (cableLength) metrics["Кабель"] = `${formatMetricNumber(cableLength)} м`;

  return metrics;
}

function renderWorks() {
  if (!currentObjectHasDetails()) {
    const status = selectedEstimateStatus();
    els.worksBoard.innerHTML = `<p class="empty">${status === "unsupported" ? "Старая смета не поддерживается в CRM. Работы и расчеты смотри в Google-таблице." : status === "not-connected" ? "Работы и расчеты этой сметы пока смотри в Google-таблице." : status === "loading" ? "Загружаю работы из сметы..." : status === "error" ? "Не получилось разобрать работы в этой смете." : "Работы появятся после подключения сметы выбранного объекта."}</p>`;
    return;
  }
  const rows = filteredWorks();
  const byRoom = rows.reduce((acc, work) => {
    acc[work.room] ||= [];
    acc[work.room].push(work);
    return acc;
  }, {});
  els.worksBoard.innerHTML =
    Object.entries(byRoom)
      .map(([roomName, works]) => {
        const roomTotal = works.reduce((sum, work) => sum + work.total, 0);
        const stageBlocks = ["Черновые работы", "Чистовые работы"]
          .map((stage) => {
            const stageWorks = works.filter((work) => work.stage === stage);
            if (!stageWorks.length) {
              return `<section class="stage-panel"><div class="stage-title"><h3>${stage}</h3><span class="pill">0</span></div><p class="empty">Нет работ</p></section>`;
            }
            const stageTotal = stageWorks.reduce((sum, work) => sum + work.total, 0);
            return `<section class="stage-panel">
              <div class="stage-title"><h3>${stage}</h3><span class="pill">${formatRub.format(stageTotal)}</span></div>
              <div class="work-row work-row-head">
                <span>Работа</span>
                <span>Цена</span>
                <span>Кол-во</span>
                <span>Площадь/м</span>
                <span>Итого</span>
              </div>
              ${stageWorks
                .map(
                  (work) => `<div class="work-row">
                    <span>${work.title}</span>
                    <span>${formatRub.format(work.price)}</span>
                    <span>${work.qty}</span>
                    <span>${work.area}</span>
                    <span>${formatRub.format(work.total)}</span>
                  </div>`,
                )
                .join("")}
            </section>`;
          })
          .join("");
        return `<article class="work-room">
          <div class="work-room-head"><h3>${roomName}</h3><strong>${formatRub.format(roomTotal)}</strong></div>
          <div class="stage-grid">${stageBlocks}</div>
        </article>`;
      })
      .join("") || `<p class="empty">Ничего не найдено</p>`;
}

function renderChecks() {
  if (!currentObjectHasDetails()) {
    els.checksCount.textContent = "0 чеков";
    const status = selectedEstimateStatus();
    els.checksList.innerHTML = `<p class="empty">${status === "unsupported" ? "Старая смета не поддерживается в CRM. Чеки смотри в Google-таблице." : status === "not-connected" ? "Чеки этой сметы пока смотри в Google-таблице." : status === "loading" ? "Загружаю чеки из сметы..." : status === "error" ? "Не получилось разобрать чеки в этой смете." : "Чеки появятся после подключения сметы выбранного объекта."}</p>`;
    els.checksTimeline.innerHTML = "";
    return;
  }
  const filtered = crmData.checks.filter((check) => matchesSearch([check[0], check[1]]));
  const maxCheck = Math.max(...crmData.checks.map((check) => check[1]));
  els.checksCount.textContent = `${filtered.length} чеков`;
  els.checksList.innerHTML =
    filtered
      .map((check) => `<div class="receipt-row"><span>${check[0]}</span><strong>${formatRub.format(check[1])}</strong></div>`)
      .join("") || `<p class="empty">Чеки не найдены</p>`;
  els.checksTimeline.innerHTML =
    filtered
      .map((check) => {
        const width = Math.max(4, Math.round((check[1] / maxCheck) * 100));
        return `<div class="timeline-row">
          <strong>${check[0]}</strong>
          <div class="timeline-line" style="width:${width}%"></div>
          <span>${formatRub.format(check[1])}</span>
        </div>`;
      })
      .join("") || `<p class="empty">Нет данных для графика</p>`;
}

function renderAll() {
  renderObjects();
  renderOverview();
  renderRooms();
  renderWorks();
  renderChecks();
  setView(state.view);
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

els.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  renderAll();
});

els.statusFilter.addEventListener("change", (event) => {
  state.status = event.target.value;
  renderAll();
});

els.typeFilter.addEventListener("change", (event) => {
  state.type = event.target.value;
  renderAll();
});

els.objectsBoard.addEventListener("click", (event) => {
  const card = event.target.closest(".object-card");
  if (!card || event.target.closest("a") || event.target.closest(".contact-menu")) return;
  state.selectedObjectId = card.dataset.objectId;
  renderObjects();
  loadEstimateForSelected({ silent: true }).then(() => renderAll());
});

els.clientPanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-object]");
  if (!button) return;
  const targetObject = crmData.objects.find((object) => object.id === button.dataset.openObject);
  if (targetObject?.unsupportedEstimate) return;
  state.selectedObjectId = button.dataset.openObject;
  state.objectOpen = true;
  state.search = "";
  els.searchInput.value = "";
  setView("overview");
  renderAll();
  loadEstimateForSelected().then(() => renderAll());
});

els.syncGoogle.addEventListener("click", refreshFromGoogle);

renderFilters();
setView(state.view);
renderAll();
refreshFromGoogle();
setInterval(refreshFromGoogle, 5 * 60 * 1000);
