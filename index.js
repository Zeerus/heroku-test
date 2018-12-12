// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Something.");
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

