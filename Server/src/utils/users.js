require("dotenv").config()
const DB_EMAIL = process.env.EMAIL;
const DB_PASSWORD = process.env.PASSWORD;

module.exports = [{ email: DB_EMAIL, password: DB_PASSWORD, }];
