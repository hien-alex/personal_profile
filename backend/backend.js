const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendgrid/mail");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send("Server status: running");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post("/api/email", (req, res, next) => {
  sendGrid.setApiKey(
    "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"
  );
  const msg = {
    to: "hiennalex@gmail.com",
    from: req.body.email,
    subject: "Portfolio Contact",
    text: req.body.message,
  };

  sendGrid
    .send(msg)
    .then((result) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

const port = 3030;
app.listen(port);

console.log("App is listening on port " + port);
