const express = require("express");
require("dotenv").config();
const authenticate = require("./middleware/clientAuthentication");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

const port = process.env.PORT || 8000;

app.use("/weather", authenticate, weatherRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log("Error in running server on port", port);
  }
  console.log("Server running on port", port);
});
