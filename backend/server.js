const express = require("express");
const app = express();

app.use(express.json());

const placeRoutes = require("./routes/place");
const contactRoutes = require("./routes/contact");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/places", placeRoutes);
app.use("/contacts", contactRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
