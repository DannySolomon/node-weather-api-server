const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

router.get("/summary/:city", weatherController.getSummary);
router.get("/hourly/:city", weatherController.getHourly);

module.exports = router;
