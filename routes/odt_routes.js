const express = require("express");
const { actionsMapping } = require("../controllers/ODTController");

const router = express.Router();

router.post("/", actionsMapping);

module.exports = {
  odtRouter: router,
};
