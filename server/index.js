const express = require("express");
const app = express();
// importing routes file
const appRouter = require('./routes/routes.js');

// Getting routes
app.use("/api/v1", appRouter);

app.listen(3000, () => {
  console.log("Working");
});