const express = require("express");
const app = express();

const cb1 = (req, res, next) => {
  let startTime = new Date().getTime();
  req.startTime = startTime;
  next();
};

const cb2 = (req, res, next) => {
  setTimeout(() => {
    next();
  }, 1000);
};

app.use(express.json());

app.get("/", cb1, cb2, (req, res) => {
  res.send("Success");
  let endTime = new Date().getTime();
  console.log("Response Time: " + (endTime - req.startTime));
});

app.listen(3000, () => {
  console.log("Listening");
});
