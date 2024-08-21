const db = require("./DatabaseModel.js");

const budgetController = {};

budgetController.removeBudgetCategory = async (req, res, next) => {
  const { budget, email } = req.body;

  const queryString = `UPDATE users SET budget = '${JSON.stringify(
    budget
  )}' WHERE email='${email}';`;

  db.query(queryString)
    .then((data) => {
      res.locals.message = `You have successfully removed the budget category.`;
      return next();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

budgetController.addBudgetCategory = async (req, res, next) => {
  const { email, newBudgetCategory } = req.body;

  db.query(`SELECT * FROM users WHERE email = '${email}';`).then((data) => {
    const user = data.rows[0];
    const budget = user.budget;

    const newBudgetItem = { [newBudgetCategory[0]]: Number(newBudgetCategory[1]) };
    budget.push(newBudgetItem);

    const userToSendBack = { ...user, budget: JSON.stringify(budget) };

    const queryString = `UPDATE users SET budget = '${JSON.stringify(
      budget
    )}' WHERE email = '${email}';`;
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

module.exports = budgetController;
