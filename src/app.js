const express = require("express");
const cors = require("cors");
const songRoutes = require("../routes/song.routes"); // ✅ Make sure this path is correct

const app = express();

// ✅ CORS Configuration: allow only your deployed frontend
app.use(
  cors({
    origin: "https://poetic-eclair-256c76.netlify.app", // 🟢 this is your actual Netlify frontend URL
    credentials: true,
  })
);

app.use(express.json());

// ✅ Use song routes
app.use("/", songRoutes);

module.exports = app;
