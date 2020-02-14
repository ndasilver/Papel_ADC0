const port = process.env.port || 3000;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "papel",
  password: "ndasilver",
  port: 5432
});

module.exports = {
  port,
  pool
};
