const db = require("./DatabaseModel.js");

const expenseController = {};

expenseController.removeExpense = async (req, res, next) => {
  const { expenses, email } = req.body;

  const queryString = `UPDATE users SET expenses = '${JSON.stringify(
    expenses
  )}' WHERE email='${email}';`;

  db.query(queryString)
    .then((data) => {
      res.locals.message = `You have successfully removed the expense.`;
      return next();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

expenseController.addExpense = async (req, res, next) => {
  const { email, updatedExpenses } = req.body;

  const stringifiedUpdatedExpenses = JSON.stringify(updatedExpenses);

  const queryString = `UPDATE users SET expenses = '${stringifiedUpdatedExpenses}' WHERE email = '${email}';`;
  db.query(queryString)
    .then((data) => {
      res.locals.message = "You have successfully added an expense.";
      return next();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = expenseController;
