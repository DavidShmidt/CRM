# CRM ремонта

Статическая CRM для ремонтных объектов и клиентского отчета по активной смете.

## Страницы

- `index.html` - внутренняя CRM: объекты, карточка клиента, финансы, помещения, работы и чеки.
- `client.html` - клиентский отчет по активному объекту, готовый к печати/PDF.

В карточке активного объекта есть два клиентских действия:

- `Страница клиента` - открывает live-отчет на текущем сайте.
- `Скачать отчет HTML` - формирует автономный HTML-файл со встроенными стилями и текущими данными, который можно отправить клиенту.

## Источники данных

- Объекты: `https://docs.google.com/spreadsheets/d/1F61V4ixhdLUiLa1jIIzwqydIJ7E3hjVYj1TJFcrfXZ4/edit`
- Активная смета: `https://docs.google.com/spreadsheets/d/1zVKZ6IrFY5RlruPvKlTjibdDbaqPr4kVgYNokngrAjU/edit`

CRM читает публичный CSV Google Sheets через `gviz/tq?tqx=out:csv`. Клиентский отчет использует общий модуль `crm-google.js`, поэтому суммы, помещения, работы и чеки подтягиваются из той же сметы, что и основная CRM.

## Локальный запуск

```powershell
& 'C:\Users\devid\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m http.server 4173 --bind 127.0.0.1
```

Открыть:

- `http://127.0.0.1:4173/index.html`
- `http://127.0.0.1:4173/client.html?object=obj-008`

## Проверка

```powershell
& 'C:\Users\devid\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check app.js
& 'C:\Users\devid\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check client.js
& 'C:\Users\devid\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check crm-google.js
```

## Синхронизация

Репозиторий: `DavidShmidt/CRM`, ветка `main`.

Codex использует bundled Git:

```powershell
& 'C:\Users\devid\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe' status --short --branch
```
