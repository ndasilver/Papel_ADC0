const express = require("express");
const router = express.Router();
const bodyParse = require("body-parser");
const controller = require("../controllers/accountController");

router.post("/user", controller.userLoginController);
router.post(
    "/accounts/3/transactions",
    controller.partcAccountTransactionsController
);
router.post("/transactions/2", controller.transaction);
router.get("/", controller.accountRegisterController);

module.exports = router;