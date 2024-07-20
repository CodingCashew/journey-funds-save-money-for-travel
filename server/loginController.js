const bcrypt = require("bcrypt");

const db = require("./LoginModel.js");

const loginController = {};

loginController.signup = async (req, res, next) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const queryString = `INSERT INTO users(email, password) values ('${email}', '${hashedPassword}');`;

  db.query(queryString)
    .then((data) => {
      res.locals.message = `You have successfully signed up.`;
      return next();
    })
    .catch((err) =>
      next({
        log: `Error in loginController.login: ${err}`,
        message: { err: "Error signing up." },
      })
    );
};

loginController.login = async (req, res, next) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);
  const queryString = `SELECT * FROM users WHERE email = '${email}';`;

  db.query(queryString)
    .then((data) => {
      if (!bcrypt.compare(data.rows[0].password, hash))
        throw new Error("Invalid password");
      res.locals.user = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: `Error in loginController.login: ${err}`,
        message: { err: "Error logging in." },
      })
    );
};

module.exports = loginController;
