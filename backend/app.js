const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require('./routes/index.routes');
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(route);

// Error Handling
app.use(function (err, _req, res, _next) {
  console.error(err);

  res.status(500);
  res.send({
    message: "Unfortunately a Technical Error Occurred",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("To Do Server");
  console.log(`🚀Server Started on PORT ${PORT}`);
});