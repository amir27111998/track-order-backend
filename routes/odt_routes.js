const express = require("express");
const { actionsMapping } = require("../controllers/ODTController");

const router = express.Router();

router.get("/", (req, res) => res.send("<h1>ODT Web Hook Is Active</h1>"));
router.post("/", actionsMapping);

module.exports = {
  odtRouter: router,
};
