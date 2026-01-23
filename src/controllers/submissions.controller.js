const {
  createSubmissionService,
} = require("../services/submissions.service");

const createSubmission = async (req, res) => {
  try {
    const { repo_url, branch } = req.body;

    if (!repo_url) {
      return res.status(400).json({
        error: "repo_url is required",
      });
    }

    const submission = await createSubmissionService({
      repo_url,
      branch,
    });

    res.status(201).json({
      id: submission.id,
      status: submission.status,
      message: "Submission created successfully",
    });
  } catch (error) {
    console.error("Create submission failed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createSubmission,
};
