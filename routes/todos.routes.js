const express = require("express");

const router = express.Router();

const {
  getAllTodos,
  createNewTodo,
  editTodo,
  deleteTodo
} = require("../controllers/todos.controllers");

router.route("/").get(getAllTodos).post(createNewTodo);

router.route("/:id").patch(editTodo).delete(deleteTodo);

module.exports = { todosRouter: router };
