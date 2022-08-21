const { loggerEvent } = require("./Events/LogEvent");
const express = require("express");
const dotenv = require("dotenv");
const { odtRouter } = require("./routes/odt_routes");
dotenv.config();
const app = express();
const { default: axios } = require("axios");

const port = process.env.PORT;

//Middleware
app.use("/", (req, res, next) => {
  loggerEvent.emit("log", { path: req.path, Body: req.body });
  next();
});

app.use(express.json());
app.use("/", odtRouter);

app.listen(port, () => {
  console.log("Server started", port);
});
