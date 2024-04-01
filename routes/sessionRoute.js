const express = require("express");
const multer = require("multer");

const session = require("../controllers/session");

const router = express.Router();

// const { upload } = require("../config/multer");
const upload = multer();

router.post("/create-session", session.createSession);

router.post(
  "/upload-file/:sessionId",
  upload.single("file"),
  session.uploadFile
);

router.delete("/delete-session/:session_id", session.deleteSession);

router.delete("/delete-file/:sessionId/:fileIndex", session.deleteFile);

module.exports = router;
