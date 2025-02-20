const express = require("express");
require('dotenv').config();

// nhúng database
const database = require("./config/database");

const route = require("./routes/client/index.route") // nhúng route vào

database.connect();

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

// Nhúng file tĩnh vào
app.use(express.static(`${__dirname}/public`));

route(app) // gọi route

app.listen(port, () => {
    console.log(`Chay thanh cong vao cong ${port}`);
});