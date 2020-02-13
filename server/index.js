const server = require("./config/server");
// importing routes file
const appRouter = require("./routes/routes.js");

// Getting routes and we always add /api/v1 after the link
app.use("/api/v1", appRouter);

app.listen(server.port, () => {
    console.log(`serving on port ${server.port}`);