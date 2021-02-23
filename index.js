const express = require("express");
const fs = require("fs");

const app = express();
app.set("view engine", "pug");

app.use(express.static("images"));
app.use(express.static("css"));

app.use("/", function (_, response) {
  const rawdata = fs.readFileSync("data.json");
  const indexViewData = JSON.parse(rawdata);
  response.render("index", indexViewData);
});

app.listen(process.env.PORT || 3000);
