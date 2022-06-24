const {Router} = require('express')
const router = Router()
const { routeController } = require('../controller/rutasController')

router.get('/', routeController )



module.exports = router