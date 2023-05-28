let express = require('express');
let app = express();

console.log("Hello World");

const absolute_path = __dirname + '/views/index.html';
app.get("/", function(req, res) {
//   res.send("Hello Express");
  res.sendFile(absolute_path);
});

































 module.exports = app;
