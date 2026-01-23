const pool = require("../db");

const createSubmissionService = async ({ repo_url, branch }) => {
  const query = `
    INSERT INTO submissions (repo_url, branch)
    VALUES ($1, $2)
    RETURNING id, status
  `;

  const values = [repo_url, branch || "main"];

  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = {
  createSubmissionService,
};
