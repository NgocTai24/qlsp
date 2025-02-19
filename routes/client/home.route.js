const express = require("express");
const router = express.Router(); // thư viện router của express

router.get("/", (req, res) => {
    res.render("client/pages/home/index");
})

module.exports = router;