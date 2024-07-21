const db = require("./ExpenseModel.js");

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
  const { email } = req.body;
  const newExpense = req.body.expense;

  db.query(`SELECT * FROM users WHERE email = '${email}';`).then((data) => {
    const user = data.rows[0];
    const currentExpensesArray = user.expenses;

    const newExpenses = JSON.stringify(currentExpensesArray.concat(newExpense));

    const userToSendBack = { ...user, expenses: newExpenses };

    const queryString = `UPDATE users SET expenses = '${newExpenses}' WHERE email = '${email}';`;
    db.query(queryString)
      .then((data) => {
        res.locals.user = userToSendBack;
        return next();
      })
      .catch((err) => {
        throw new Error(err);
      });
  });
};

module.exports = expenseController;
