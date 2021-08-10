const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fs = require('fs');
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(80, () => {
  console.log(`Example app listening at 80`);
});
app.get('/', (req, res) => {
    const dataPath = './restcountries.json';
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
app.use(function (req, res, next) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>404 Not Found\n</h2>");
    res.end();
  });