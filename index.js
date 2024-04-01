const express = require("express");
const bodyParser = require("body-parser");

const sessionRouter = require("./routes/sessionRoute");

const app = express();

const PORT = 8000;

app.use(bodyParser.json());

app.use("/api/v1", sessionRouter);

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
