const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const data = require("./data");
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// your code goes here
app.get("/topRankings", (req, res) => {
  const limit = req.query.limit;
  const offset = req.query.offset;
  const limits = limit === undefined ? 20 : limit;
  const offsets = offset === undefined ? 0 : offset;
  const value = data.data.slice(offsets, limits);
  res.send(value);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
