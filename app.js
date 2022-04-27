const express = require("express");

const cors = require("cors");

const helmet = require("helmet");

const rateLimit = require("express-rate-limit");

const compression = require("compression");

const { todosRouter } = require("./routes/todos.routes");

const app = express();

app.use(express.json());

app.use(helmet());

app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message:
    "Too many accounts created from this IP, please try again after an hour"
});

app.use(limiter);

app.use(cors());

app.use("/api/v1/todos", todosRouter);

module.exports = { app };
