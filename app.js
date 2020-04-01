import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./routes/index.js";

const app = express();

/**
 * Connect to the database
 */

// mongoose.connect("", { useNewUrlParser: true });
mongoose
  .connect("mongodb://localhost", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected!"))
  .catch(err => {
    console.log("DB Connection Error:", err.message);
  });
/**
 * Middleware
 */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// catch 400
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(400).send(`Error: ${res.originUrl} not found`);
  next();
});

// catch 500
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(`Error: ${err}`);
  next();
});

/**
 * Register the routes
 */

routes(app);

export default app;
