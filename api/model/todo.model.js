// Import Conection to database
const { sequelize } = require("../utils/database");

// Import DataTypes
const { DataTypes } = require("sequelize");

const Todo = sequelize.define("todos", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: "active"
  }
});

module.exports = { Todo };
