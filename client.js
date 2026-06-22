const formatRub = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });

const els = {
  title: document.querySelector("#reportTitle"),
  meta: document.querySelector("#reportMeta"),
  summaryLabor: document.querySelector("#summaryLabor"),
  summaryMaterials: document.querySelector("#summaryMaterials"),
  summaryReceived: document.querySelector("#summaryReceived"),
  summaryBalance: document.querySelector("#summaryBalance"),
  roomsCount: document.querySelector("#roomsCount"),
  checksCount: document.querySelector("#checksCount"),
  rooms: document.querySelector("#rooms"),
  works: document.querySelector("#works"),
  checks: document.querySelector("#checks"),
};

function setLoading() {
  els.rooms.innerHTML = `<p class="empty">Загружаю помещения из Google-таблицы...</p>`;
  els.works.innerHTML = `<p class="empty">Загружаю работы из Google-таблицы...</p>`;
  els.checks.innerHTML = `<p class="empty">Загружаю чеки из Google-таблицы...</p>`;
}

function setError(error) {
  const message = error?.message || "Не получилось обновить отчет";
  els.meta.textContent = `Google не отдал данные: ${message}`;
  els.rooms.innerHTML = `<p class="empty">Не удалось загрузить помещения. Откройте смету в Google-таблице.</p>`;
  els.works.innerHTML = `<p class="empty">Не удалось загрузить работы. Откройте смету в Google-таблице.</p>`;
  els.checks.innerHTML = `<p class="empty">Не удалось загрузить чеки. Откройте смету в Google-таблице.</p>`;
}

function renderSummary(snapshot) {
  const { activeObject, summary } = snapshot;
  els.title.textContent = activeObject.address || "Волховстроя, 20, кв. 74";
  els.meta.textContent = `${activeObject.task || "Квартира"} · ${activeObject.name || "Клиент"} · обновлено ${new Date().toLocaleDateString("ru-RU")}`;
  els.summaryLabor.textContent = formatRub.format(summary.laborTotal);
  els.summaryMaterials.textContent = formatRub.format(summary.materials);
  els.summaryReceived.textContent = summary.received ? formatRub.format(summary.received) : "Не указано";
  els.summaryBalance.textContent = summary.received ? formatRub.format(summary.balance) : "—";
  els.roomsCount.textContent = `${snapshot.rooms.length} разделов`;
  els.checksCount.textContent = `${snapshot.checks.length} чеков`;
}

function renderRooms(rooms) {
  const maxRoom = Math.max(...rooms.map((room) => room.total), 1);
  els.rooms.innerHTML = rooms
    .map((room) => {
      const width = Math.max(8, Math.round((room.total / maxRoom) * 100));
      const metrics = Object.entries(room.metrics)
        .map(([label, value]) => `<span>${label}</span><strong>${value}</strong>`)
        .join("");
      return `<article class="room-card">
        <h3>${room.name}</h3>
        <strong>${formatRub.format(room.total)}</strong>
        <div class="room-metrics">${metrics}</div>
        <small>${room.works.length} позиций</small>
        <div class="bar"><div style="width:${width}%"></div></div>
      </article>`;
    })
    .join("");
}

function renderWorks(rooms) {
  els.works.innerHTML = rooms
    .map((room) => {
      const stages = ["Черновые работы", "Чистовые работы"]
        .map((stage) => {
          const stageWorks = room.works.filter((work) => work[0] === stage);
          if (!stageWorks.length) return "";
          return `<section class="stage">
            <h4>${stage}</h4>
            <div class="work-row work-head">
              <span>Работа</span>
              <span>Цена</span>
              <span>Кол-во</span>
              <span>Площадь/м</span>
              <span>Итого</span>
            </div>
            ${stageWorks
              .map(
                (work) => `<div class="work-row">
                  <span>${work[1]}</span>
                  <span>${formatRub.format(work[2])}</span>
                  <span>${work[3]}</span>
                  <span>${work[4]}</span>
                  <strong>${formatRub.format(work[5])}</strong>
                </div>`,
              )
              .join("")}
          </section>`;
        })
        .join("");
      return `<article class="work-room"><h3>${room.name}<span>${formatRub.format(room.total)}</span></h3>${stages}</article>`;
    })
    .join("");
}

function renderChecks(checks) {
  els.checks.innerHTML = checks
    .map((check) => `<div class="check-row"><span>${check[0]}</span><strong>${formatRub.format(check[1])}</strong></div>`)
    .join("");
}

async function renderReport() {
  setLoading();
  try {
    const snapshot = await CrmGoogle.loadActiveEstimate();
    renderSummary(snapshot);
    renderRooms(snapshot.rooms);
    renderWorks(snapshot.rooms);
    renderChecks(snapshot.checks);
  } catch (error) {
    setError(error);
    console.warn("Client report sync failed", error);
  }
}

renderReport();
