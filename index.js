// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

