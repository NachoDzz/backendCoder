const routeController = (req, res) => {
    try{
        res.render('datos.pug', req.query)
    }catch(e){
        console.log('error: ', e) ;
        res.status(500)
    }
}

module.exports = {
    routeController
}