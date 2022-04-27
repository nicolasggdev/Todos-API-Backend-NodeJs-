// Import Express
const express = require("express");

// Import Router
const router = express.Router();

// Import Controllers
const {
  getAllTodos,
  createNewTodo,
  editTodo,
  deleteTodo
} = require("../controllers/todos.controllers");

// Endpoints

// GET http://localhost:4000/api/v1/todos
router.get("/", getAllTodos);

// POST http://localhost:4000/api/v1/todos
router.post("/", createNewTodo);

// PATCH http://localhost:4000/api/v1/todos/:id
router.patch("/:id", editTodo);

// DELETE http://localhost:4000/api/v1/todos/:id
router.delete("/:id", deleteTodo);

module.exports = { todosRouter: router };
