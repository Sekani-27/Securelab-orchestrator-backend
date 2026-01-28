const express = require("express");
const router = express.Router();

const {
  createSubmission,
  updateSubmissionStatus,
} = require("../controllers/submissions.controller");

router.post("/", createSubmission);
router.patch("/:id/status", updateSubmissionStatus);

module.exports = router;

router.patch("/:id/status", updateSubmissionStatus);
