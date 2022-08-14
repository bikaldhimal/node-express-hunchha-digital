const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setting static folder
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(
  "mongodb://localhost/my_database",
  () => {
    console.log("connected");
  },
  (e) => console.log(e)
);

//! Handle Contact Us request
const contactRoute = require("./routes/contact");
app.use("/contact", contactRoute);

//! Admin routes
const adminRouter = require("./routes/admin");
app.use("/dashboard", adminRouter);

//! Products routes
const productRouter = require("./routes/products");
app.use("/products", productRouter);

port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`You're server is running on port ${port}`);
});
