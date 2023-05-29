let express = require('express');
let app = express();

console.log("Hello World");

const absolute_path = __dirname + '/views/index.html';


app.get("/", function(req, res) {
//   res.send("Hello Express");
  res.sendFile(absolute_path);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res){
    res.json({"message": "Hello json"})
});

































 module.exports = app;
