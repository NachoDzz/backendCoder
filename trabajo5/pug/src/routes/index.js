const { Router } = require('express');

const {
    postProducto,
    getProducto,
    getHome } = require("../controllers/controller.js")

const routes = Router()

routes.get("/", getHome)

routes.get("/productos", getProducto)

routes.post("/", postProducto)

module.exports = routes