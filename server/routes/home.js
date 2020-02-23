const express = require("express");
const router = express.Router();
const controller = require("../controllers/homeController");

router.get("/", controller.homeMessage);

module.exports = router;