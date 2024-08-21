const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
const loginController = require("./loginController");
const expenseController = require("./expenseController");
const budgetController = require("./budgetController");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../src/index.css")));
app.use(express.static(path.resolve(__dirname, "../src/public/assets/")));
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
});
app.post("/signup", loginController.signup, (req, res) => {
  return res.status(200).json(res.locals.message);
});

app.post("/login", loginController.login, (req, res) => {
  return res.status(200).json(res.locals.user);
});

app.post("/expense", expenseController.addExpense, (req, res) => {
  return res.status(200).json(res.locals.message);
});

app.delete("/expense", expenseController.removeExpense, (req, res) => {
  return res.status(200).json(res.locals.message);
});

app.post("/budget", budgetController.addBudgetCategory, (req, res) => {
  return res.status(200).json(res.locals.user);
});

app.delete("/budget", budgetController.removeBudgetCategory, (req, res) => {
  return res.status(200).json(res.locals.message);
});

app.use("*", (req, res) =>
  res.status(404).send("The page you are looking for does not exist.")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred." },
  };
  const errObj = Object.assign({}, defaultErr, err);

  res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
