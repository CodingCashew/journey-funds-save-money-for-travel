const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../src/styles.css")));
app.use(express.static(path.resolve(__dirname, "../src/assets/")));
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
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

app.listen(PORT, () => {});

module.exports = app;