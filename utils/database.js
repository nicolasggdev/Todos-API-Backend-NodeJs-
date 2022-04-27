// Import sequelize
const { Sequelize } = require("sequelize");

// Import dotenv
const dotenv = require("dotenv");

// Init dotenv
dotenv.config({ path: "./config.env" });

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: "" + process.env.PORT,
  database: process.env.DB,
  dialect: process.env.DIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = { sequelize };
