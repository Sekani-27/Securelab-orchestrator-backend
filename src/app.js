const express = require("express");
const cors = require("cors");

const submissionsRoutes = require("./routes/submissions.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "securelab-orchestrator" });
});

app.use("/submissions", submissionsRoutes);

module.exports = app;

