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
  const limits = limit === undefined || isNaN(limit) ? 20 : Number(limit);
  const offsets = offset === undefined || isNaN(offset) ? 0 : Number(offset);
  console.log(offsets, limits);
  const value = data.data.slice(offsets, limits + offsets);
  res.send(value);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
