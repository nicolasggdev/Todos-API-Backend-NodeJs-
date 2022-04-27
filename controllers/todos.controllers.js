// Import Model
const { Todo } = require("../model/todo.model");

// Import Utils
const { filterObj } = require("../utils/functions.utils");

// Get all the todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({ where: { status: "active" } });
    res.status(200).json({
      status: "success",
      data: {
        todos
      }
    });
  } catch (err) {
    console.log(err);
  }
};

// Create new todo
exports.createNewTodo = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      res.status(400).json({
        status: "error",
        message: "The property is no valid"
      });
    } else {
      const todo = await Todo.create({ content });
      res.status(200).json({
        status: "success",
        data: {
          todo
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// Edit the todo
exports.editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: { id, status: "active" } });
    if (!todo) {
      res.status(404).json({
        status: "error",
        message: "Cant find the user with the given ID"
      });
    } else {
      const data = filterObj(req.body, "content");
      await todo.update({ ...data });
      res.status(204).json({ status: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

// Delete the todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ where: { id, status: "active" } });
    if (!todo) {
      res.status(404).json({
        status: "error",
        message: "Cant find the user with the given ID"
      });
    } else {
      await todo.update({ status: "deleted" });
      res.status(204).json({ status: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

// comentario de prueba
