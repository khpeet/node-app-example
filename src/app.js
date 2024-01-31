const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("public"));

app.get("/test", (_req, res) => {
  res.status(302).send("Test Success!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
