let express = require('express');
require('dotenv').config();
let app = express();
let bodyParser = require('body-parser');

function logger(req, res, next) {
  const meth = req.method;
  const ip = req.ip;
  const pathh = req.path;
  const log = `${meth} ${pathh} - ${ip}`;
  console.log(log);
  next();
}
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger)
app.use("/public", express.static(__dirname + "/public"));

console.log("Hello World");
const absolute_path = __dirname + '/views/index.html';
app.get("/", function(req, res) {
//   res.send("Hello Express");
  res.sendFile(absolute_path);
});

app.get("/json", function(req, res){
  if (process.env.MESSAGE_STYLE==='uppercase'){
    res.json({"message": "HELLO JSON"});
  } else {
    res.json({"message": "Hello json"});
  }
});

app.get("/now", function chaining(req, res, next){
  req.time = new Date().toString();
  next();

}, function chain_2(req, res){
res.send({'time': req.time});
});

app.get("/:word/echo", function(req, res){
  const { word } = req.params;
  res.json({echo : word});
});

app.get("/name", function (req, res){
  const {first} = req.query;
  const {last} = req.query;
  const name = { 'name': first + ' ' + last }
  res.json(name)
});

app.post("/name", function(req, res){
  const body = req.body;
  res.send(body);
});






























 module.exports = app;
