const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes FIRST
app.use("/api/enquiry", require("./routes/enquiryRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("Jyotirlinga backend is running");
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error(err));

// Start server LAST
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
