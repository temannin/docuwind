const express = require("express");

const emojis = require("./emojis");

const router = express.Router();

router.get("/posts", (req, res) => {
  res.json([
    {
      title: "First blog post!",
      author: "tyler",
      content: "API - 👋🌎🌍🌏",
    },
  ]);
});

router.use("/emojis", emojis);

module.exports = router;
