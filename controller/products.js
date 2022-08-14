//* Modal
const Products = require("../model/products");

//! Get add product page
exports.getAddProducts = (req, res) => {
  Products.find({}).exec((err, result) => {
    console.log(result);
    res.render("admin/product", { data: result });
  });
};

//! Add products
function addProducts(req, res) {
  console.log(Products.find({}));
  if (
    !req.body.name ||
    !req.body.color ||
    !req.body.price ||
    !req.body.quantity ||
    !req.body.description
  ) {
    res.redirect("products");
    //  console.log("Error");
    return;
  } else {
    const product = new Products({
      name: req.body.name,
      color: req.body.color,
      quantity: parseInt(req.body.quantity),
      price: req.body.price,
      description: req.body.description,
    });
    product.save((err, result) => {
      if (err) throw err;
      res.redirect("products");
    });
  }
}
exports.postAddProduct = (req, res) => {
  addProducts(req, res);
};
