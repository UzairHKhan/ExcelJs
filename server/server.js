const express = require("express");
const router = require("./router")
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();

router(app);

app.listen(PORT, () => {
  console.log("Server is up and listing at Port no. ", PORT);
});
