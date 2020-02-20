const server = require("../config/server");
const moment = require("moment");
const pool = server.pool;

const textQuery = `CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) UNIQUE NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL ,
  type  VARCHAR(25) NOT NULL,
  is_admin BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions(
  id SERIAL PRIMARY KEY,
  createdon TIMESTAMP,
  type VARCHAR(30) NOT NULL,
  accountNumber INT NOT NULL,
  cashier INT NOT NULL,
  amount FLOAT NOT NULL,
  oldBalance FLOAT,
  newBalance FLOAT
);

CREATE TABLE IF NOT EXISTS accounts(
  id SERIAL PRIMARY KEY,
  accountNumber INT UNIQUE,
  createdOn TIMESTAMP NOT NULL,
  owner INT NOT NULL,
  type VARCHAR(30) NOT NULL,
  status VARCHAR(100) NOT NULL DEFAULT 'DRAFT',
  balance FLOAT DEFAULT 0.0
);
INSERT INTO users(email,firstName,lastName,password,type,is_admin)VALUES('ndasilver@boldevs.com','Ndayisaba','Sylver','$2y$12$c/T7hIfSYPthEQRikoiDXukVsZ95ADokyS78y9ehKgGSZJKJuDg9G','staff',true);
`;

pool.query(textQuery, (error, result) => {
  if (error) {
    throw error;
  }
  console.log(
    "Tables Created Successfuly. \n Default Admin: ndasilver@boldevs.com \n Password:Admin123"
  );
});
