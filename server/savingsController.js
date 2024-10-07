const db = require("./DatabaseModel.js");

const savingsController = {};

savingsController.removeSavingsCategory = async (req, res, next) => {
  const { savings, email } = req.body;

  const queryString = `UPDATE users SET savings = '${JSON.stringify(
    savings
  )}' WHERE email='${email}';`;

  db.query(queryString)
    .then((data) => {
      res.locals.message = `You have successfully removed the savings category.`;
      return next();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

savingsController.addSavingsCategory = async (req, res, next) => {
  const { email, newSavingsCategory } = req.body;

  db.query(`SELECT * FROM users WHERE email = '${email}';`).then((data) => {
    const user = data.rows[0];
    const savings = user.savings;

    const newSavingsItem = { [newSavingsCategory[0]]: Number(newSavingsCategory[1]) };
    savings.push(newSavingsItem);

    const userToSendBack = { ...user, savings: JSON.stringify(savings) };

    const queryString = `UPDATE users SET savings = '${JSON.stringify(
      savings
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

savingsController.removeSavingsEntry = async (req, res, next) => {
  const { savings, email } = req.body;

  const queryString = `UPDATE users SET savings = '${JSON.stringify(
    savings
  )}' WHERE email='${email}';`;

  db.query(queryString)
    .then((data) => {
      res.locals.message = `You have successfully removed the savings entry.`;
      return next();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

savingsController.addSavingsEntry = async (req, res, next) => {
  const { email, updatedSavings } = req.body;

  const stringifiedUpdatedSavings = JSON.stringify(updatedSavings);

  const queryString = `UPDATE users SET savings = '${stringifiedUpdatedSavings}' WHERE email = '${email}';`;
  db.query(queryString)
    .then((data) => {
      res.locals.message = "You have successfully added a savings entry.";
      return next();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = savingsController;
