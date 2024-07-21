const db = require("./ExpenseModel.js");

const expenseController = {};

expenseController.removeExpense = async (req, res, next) => {
  const { id } = req.params;

  // GET user

  // Filter out the expense from the user's expenses array

  // 2. Filter out the expense from the user's expenses array
  // const filteredExpenses = data.rows[0].expenses.filter((el) => el !== expense);

  // UPDATE user with new expenses array

  // const queryString = `INSERT INTO users(email, password) values ('${email}', '${hashedPassword}');`;

  // db.query(queryString)
  //   .then((data) => {
  //     res.locals.message = `You have successfully signed up.`;
  //     return next();
  //   })
  //   .catch((err) =>
  //     next({
  //       log: `Error in expenseController.login: ${err}`,
  //       message: { err: "Error removing expense." },
  //     })
  //   );
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
