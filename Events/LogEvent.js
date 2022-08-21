const { EventEmitter } = require("events");
const { logEvent } = require("../utils/logger");

class LoggerEvent extends EventEmitter {}

const loggerEvent = new LoggerEvent();

loggerEvent.on("log", (msg) => {
  logEvent(msg);
});

module.exports = {
  loggerEvent,
};
