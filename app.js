//  Import Express
const express = require("express");

// Import Cors
const cors = require("cors");

// Import Database
const { sequelize } = require("./utils/database");

// Import Router
const { todosRouter } = require("./routes/todos.routes");

// Init Express
const app = express();

// Enable to receive JSON
app.use(express.json());

// Enable to use localhost 3000 (Frontend) and 4000 (Backend)
app.use(cors());

// Enable the endpoints
app.use("/api/v1/todos", todosRouter);

// Database authenticated
sequelize
  .authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

// Database sync
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

// http://localhost:4000
app.listen(4000, () => {
  console.log("Express Running");
});
