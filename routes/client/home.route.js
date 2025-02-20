const express = require("express");
const router = express.Router(); // thư viện router của express

const controller = require("../../controllers/client/home.controller");

router.get("/", controller.index );

module.exports = router;