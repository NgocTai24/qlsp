module.exports.index = (req, res) => {
    res.render("client/pages/products/index", {
        pageTitle: "Trang Danh Sach SP"
    });
}