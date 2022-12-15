// Dependencies
const express = require("express");
const morgan = require("morgan");

const app = express();

// Middleware, see HTTP requests
app.use(morgan("tiny"));

// Routes
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res
    .status(200)
    .send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
});

module.exports = app;
