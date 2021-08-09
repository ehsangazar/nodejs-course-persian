const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

const users = [{ name: "Ehsan", age: 31 }];

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

const checkAccess = function (req, res, next) {
  // Process
  // Authentication
  req.user = "Ehsan";

  next();
};

const handleUser2 = function (req, res, next) {
  // Process
  // Authentication
  req.user2 = "Jack";

  next();
};

app.use(myLogger);

// READ
app.get("/", checkAccess, handleUser2, function (req, res) {
  res.json({
    users: users,
    userName: req.user,
    userName2: req.user2,
  });
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
