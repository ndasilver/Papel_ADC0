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

module.exports = {
    userLoginController,
    accountRegisterController,
    transactionRegisterController,
    partcAccountTransactionsController,
    transaction
};