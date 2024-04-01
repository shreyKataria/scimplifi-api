const { v4: uuidv4 } = require("uuid");
const Session = require("../model/sessionModel");

const sessions = {};

const createSession = (req, res) => {
  const sessionId = uuidv4();
  const session = new Session(sessionId);
  sessions[sessionId] = session;
  res.json({ Session_id: sessionId });
  // console.log(sessions);
};

const uploadFile = (req, res) => {
  const { sessionId } = req.params;
  try {
    if (!sessions[sessionId]) {
      throw new Error("Session not found");
    }
    if (!req.file) {
      throw new Error("No file uploaded");
    }
    const content = req.file.buffer.toString();
    if (!sessions[sessionId]) {
      throw new Error("Session not found");
    }

    const result = sessions[sessionId].addFile(content);
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  console.log(sessions);
};

const deleteSession = (req, res) => {
  const sessionId = req.params.session_id;
  if (sessions[sessionId]) {
    delete sessions[sessionId];
    res.json({ message: "Session deleted successfully", sessionId });
    console.log("Session deleted:", sessionId);
  } else {
    res.status(404).json({ error: "Session not found" });
  }
};

const deleteFile = (req, res) => {
  const { sessionId, fileIndex } = req.params;
  const session = new Session();
  try {
    if (!session.deleteFile(sessionId, fileIndex)) {
      return res.status(404).json({ error: "File not found" });
    }

    const result = session.calculateResult(sessionId);
    res.json({ Result: result });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createSession,
  uploadFile,
  deleteSession,
  deleteFile,
};
