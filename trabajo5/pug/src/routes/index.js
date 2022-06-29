
const { Router } = require("express");

const { postProduct,
        getProduct, 
        getHome } = require("../controllers/Controller");

const routes = Router()

routes.get("/", getHome );

routes.post("/", postProduct );

routes.get("/productos", getProduct );

module.exports = routes