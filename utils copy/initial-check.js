const shriApi = require("../api/shri-api");
const buildRunner = require("./build-runner");

module.exports = async () => {
  try {
    const STEP = 25;
    let offset = 0;
    let limit = STEP;

    // скачиваем все билды в очереди
    while (true) {
      // проверяем наличие сохраненных настроек
      const settings = await shriApi.getConfig();

      if (!settings || !settings.data || !settings.data.id) break;

      const response = await shriApi.getBuildList(offset, limit);

      offset += STEP;
      limit += STEP;

      const allBuilds = response.data;

      // останавливаем если больше нет билдов
      if (!allBuilds || allBuilds.length < 1) break;

      const waitingBuilds = allBuilds.filter(
        ({ status }) => status === "Waiting" || status === "InProgress"
      );

      // добавляем билды со статусом "Waiting" и "InProgress" в очередь на сборку
      buildRunner.addBuilds(waitingBuilds);
    }
  } catch (error) {
    console.log(error);
  }
};
