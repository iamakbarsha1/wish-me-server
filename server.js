require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/db");
const AuthRouter = require("./router/authRouter");
const logger = require("./middleware/logger.middleware");

const app = express();

// middlewares
app.use(express.json());
// app.use(logger);
app.use(
  cors({
    origin: "http://localhost:3000", // Client URL
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

// Routes
app.use(`/`, AuthRouter);
// app.use(`/api/post`);

// Server initialization
app.listen(process.env.PORT, (res, err) => {
  if (err) return logger.error("Server down! " + err);
  else
    return logger.info(
      `Server running on http://localhost:${process.env.PORT}`
    );
});

dbConnection(); // Database connection
