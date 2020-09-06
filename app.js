const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
//const router = express.Router();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static(path.join(__dirname, "Resources")));

app.get("/", (req, res, next) => {
  console.log(req);
  res.sendFile(path.join(__dirname + "/Resources/index.html"));
});

app.get("/secret", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Api is working correctly!!!",
  });
});

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "f2019027020@umt.edu.pk",
    pass: "bKw5nB7@",
  },
});

app.post("/api/v1/contact", (req, res, next) => {
  let mailDetails = {
    from: req.body.fname,
    to: "mujtabafarooq730@gmail.com",
    subject: `Message from ${req.body.fname}`,
    text: `${req.body.message} Email: ${req.body.email}`,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      res.status(500).json({
        status: "Fail",
        message: "Something Went Wrong!!",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: JSON.stringify(req.body),
      });
    }
  });
});

// Starting the Server --------------------------------------------------------------------
const port = process.env.PORT || 4000;
const hostName = "mujtabafarooq.com";
const server = app.listen(port, () => {
  console.log(`App Running on the port ${port}`);
});
