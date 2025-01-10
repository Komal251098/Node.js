const express = require("express");
const {
  handleGenerateShortUrRL,
  handleGetShortURL,
  handleGetAnalytics,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/", handleGenerateShortUrRL);
router.get("/:shortId", handleGetShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
