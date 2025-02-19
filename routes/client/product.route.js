const express = require("express");
const router = express.Router(); // thư viện router của express

router.get("/products", (req, res) => {
    res.render("client/pages/products/index");
})

module.exports = router;