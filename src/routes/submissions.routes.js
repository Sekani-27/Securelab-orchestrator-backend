const express = require("express");
const router = express.Router();

const {
  createSubmission,
} = require("../controllers/submissions.controller");

router.post("/", createSubmission);

module.exports = router;

router.patch("/:id/status", updateSubmissionStatus);
