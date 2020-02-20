const server = require("../config/server");
const pool = server.pool;

let userLoginController = (req, res) => {
  res.send("User controller working");
};

let userRegisterController = (req, res) => {
  res.send("user register");
};
let accountRegisterController = (req, res) => {
  res.send("Hello controller is working");
};
let transactionRegisterController = (req, res) => {
  res.send("controller for registering debit or credit");
};
// Get all the transactions for a particular account.
let partcAccountTransactionsController = (req, res) => {
  res.send("response");
};
// View a specific transaction
let transaction = (req, res) => {
  res.send("transaciton with id");
};
let userViewController = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (err, result) => {
    if (err) {
      res.status(404).json({
        status: 404,
        error: err
      });
    }
    res.status(200).json({
      status: 200,
      data: result.rows
    });
  });
};

module.exports = {
  userLoginController,
  accountRegisterController,
  transactionRegisterController,
  partcAccountTransactionsController,
  userRegisterController,
  transaction,
  userViewController
};
