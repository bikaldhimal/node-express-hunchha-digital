const express = require("express");

const router = express.Router();

//! Product Controller
const productController = require("../controller/products");
router
  .route("/")
  .get(productController.getAddProducts)
  .post(productController.postAddProduct);

module.exports = router;
