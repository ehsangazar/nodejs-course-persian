const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

const users = [{ name: "Ehsan", age: 31 }];

// READ
app.get("/", function (req, res) {
  res.send(`User Number: ${users.length}`);
});

// READ
app.get("/user", function (req, res) {
  res.json(users);
});

// CREATE
app.post("/user", function (req, res) {
  users.push(req.body);
  res.json(users);
});

app.patch("/user/:id", function (req, res) {
  users[req.params.id].name = req.body.updatedName;
  res.json(users);
});

app.put("/user/:id", function (req, res) {
  users[req.params.id].job = req.body.job;
  res.json(users);
});

app.delete("/user/:id", function (req, res) {
  delete users[req.params.id];
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
