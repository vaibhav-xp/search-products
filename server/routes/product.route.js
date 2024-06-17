const express = require("express");
const fetchProducts = require("../controllers/product.controller");

const productRouter = express.Router();

productRouter.get("/all", fetchProducts);

module.exports = productRouter;

