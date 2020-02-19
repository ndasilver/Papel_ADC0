const server = require("./config/server");
const express = require("express");
const app = express();
// importing routes file
const appRouter = require("./routes/routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// Getting routes and we always add /api/v1 after the link
app.use("/api/v1", appRouter);

app.listen(server.port, () => {
    console.log(`serving on port ${server.port}`)
});