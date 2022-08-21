const fs = require("fs");
const fsPromisses = fs.promises;
const { format } = require("date-fns");
const path = require("path");

const logEvent = (messsageObj = {}) => {
  const PATH = process.env.LOG_PATH;
  const timestamp = format(Date.now(), "yyyy-MM-dd HH:mm:ss");
  const dataJson = JSON.stringify(messsageObj);
  const message = `${timestamp}\t\t${dataJson}\n`;
  try {
    if (!fs.existsSync(path.dirname(PATH))) {
      fs.mkdir(path.dirname(PATH), () => {});
    }
    fsPromisses.appendFile(PATH, message, (err) => {
      if (err) throw err;
      console.log("Log Added");
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  logEvent,
};
