const express = require("express");
const app = express();
app.listen(8001, () =>
  console.log("Backend is running in port 8001 and client in 3000")
);
