const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const route = require("./routes");
const app = express();

dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(route);

app.use(function (err, _req, res, _next) {
  console.error(err);
  res.status(500);
  res.send({
    message: "Unfortunately a Technical Error Occurred",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  console.log(`🚀Server Started on PORT ${PORT}`);
  console.log("To Do Server");
  console.log(`Database connected successfully.`);
});
