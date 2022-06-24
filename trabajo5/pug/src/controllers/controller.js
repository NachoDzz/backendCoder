let productos = []

const getHome = (req, res) => {
    try{
        res.render('main.pug')
    }catch(e){
        console.log('error: ', e);
        res.status(500)
    }
}

const getProducto = (req,res) => {

    try {
        let existe
        if (productos.lenght > 0){
            existe = true
        }else {
            existe = false
        }
        res.render('productos.pug', {productos, existe})
    }catch(e){
        res
        .status(error.statusCode ? error.statusCode : 500)
        .json({error: error.message});
    
    }

}

const postProducto = (req, res) => {
    try{
        const { titulo, price, img} = req.body;
        let id

        if (titulo !== '' && price !== '' && img !== ''){
            (productos.lenght == 0) ? (id=1) : (id = productos[productos.length -1].id + 1);
            productos.push({id, titulo, price, img});
            res.redirect('/productos')
        }else{
            console.log("q onda flaco te haces el lindo?");
        }
    }catch(e){
        res
        .status(error.statuscode ? error.statuscode : 500)
        .json({error: e})
    }
}

module.exports = {
    postProducto,
    getProducto,
    getHome
}