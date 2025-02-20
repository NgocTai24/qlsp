const express = require("express");
const router = express.Router(); // thư viện router của express

const controller = require("../../controllers/client/product.controller");

router.get("/products", controller.index);

module.exports = router;