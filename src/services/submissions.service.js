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


const updateSubmissionStatusService = async (id, status) => {
  const query = `
    UPDATE submissions
    SET status = $1
    WHERE id = $2
    RETURNING *
  `;

  const values = [status, id];

  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = {
  createSubmissionService,
  updateSubmissionStatusService,
};

const getAllSubmissionsService = async () => {
  const result = await pool.query(
    "SELECT * FROM submissions ORDER BY created_at DESC"
  );
  return result.rows;
};

module.exports = {
  createSubmissionService,
  getAllSubmissionsService,
};
