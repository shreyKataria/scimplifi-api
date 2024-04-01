class Session {
  constructor(sessionId) {
    this.sessionId = sessionId;
    this.files = [];
    this.result = 0;
  }

  addFile(content, i) {
    if (this.files.length >= 15) {
      this.files.shift(); // Drop the first file if more than 15 files
    }
    this.files.push(content);
    let sum = 0;
    for (const file of this.files) {
      sum += this.solveExpression(file);
    }
    this.result = sum;
    return sum;
  }

  deleteFile(fileIndex) {
    if (
      !this.files[sessionId] ||
      this.files[sessionId].length === 0 ||
      fileIndex >= this.files[sessionId].length
    ) {
      return false;
    }

    this.files[sessionId].splice(fileIndex, 1);
    return true;
  }

  solveExpression(expression) {
    return eval(expression);
  }
}

module.exports = Session;
