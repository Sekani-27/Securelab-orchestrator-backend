require("dotenv").config();
const app = require("./app");
const pool = require("./db");

const PORT = process.env.PORT || 4000;

// Test DB connection
pool.query("SELECT 1")
  .then(() => console.log(" Database test query successful"))
  .catch(err => console.error(" Database connection failed", err));

app.listen(PORT, () => {
  console.log(`🚀 SecureLab Orchestrator running on port ${PORT}`);
});
