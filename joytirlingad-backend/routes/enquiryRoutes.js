const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");
const auth = require("../middleware/auth");

// POST – public
router.post("/", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.json({ message: "Enquiry sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error saving enquiry" });
  }
});

// GET – admin protected
router.get("/", auth, async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ message: "Error fetching enquiries" });
  }
});

module.exports = router;
