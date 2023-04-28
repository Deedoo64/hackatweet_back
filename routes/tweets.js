var express = require("express");
var router = express.Router();
const Tweet = require("../models/tweets");
const { checkBody } = require("../modules/checkBody");

router.post("/add", (req, res) => {
  console.log("AAAAAAAAA");
  if (!checkBody(req.body, ["userId", "text"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  const newTweet = new Tweet({
    userId: req.body.userId,
    text: req.body.text,
  });
  newTweet
    .save()
    .then((data) => {
      res.json({
        result: true,
      });
    })
    .catch((error) => {
      console.error(error);
      res.json({
        result: false,
        error: "Unable to save data",
      });
    });
});
module.exports = router;
