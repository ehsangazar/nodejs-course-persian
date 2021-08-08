const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.get("/contact", (req, res) => {
  res.send("This is Contact Page");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
