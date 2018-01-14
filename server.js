const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.send("/");
});

app.listen(PORT, function(err) {
  if (err) throw err;
});
