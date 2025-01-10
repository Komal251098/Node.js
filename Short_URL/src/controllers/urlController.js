const shortid = require("shortid");
const URL = require("../models/url");

const handleGenerateShortUrRL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
};

const handleGetShortURL = async (req, res) => {
  const shortId = req.params.shortId;

  try {
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    // Use res.redirect to redirect the user
    return res.redirect(entry.redirectURL);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

module.exports = {
  handleGenerateShortUrRL,
  handleGetShortURL,
  handleGetAnalytics,
};
