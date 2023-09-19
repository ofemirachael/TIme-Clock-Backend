const express = require("express");

const app = express();

port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`This is the <h1>Time Clock Management Application...</h1>`);
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
