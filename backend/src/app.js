const express = require("express");
const PORT = 5000;
const app = express();
app.get("/ping", (req, res) => {
  return res.send({
    error: false,
    message: "Server is healthy",
  });
});
app.listen(PORT, () => {
  console.log("Server started listening on PORT : " + PORT);
});