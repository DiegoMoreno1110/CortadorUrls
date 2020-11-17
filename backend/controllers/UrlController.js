const Url = require('../models/Url');

exports.createUrl =  (req, res) => {
    let url = {};
    url.url = req.body.url;
    url.idGenerado = req.body.idGenerado;
    url.nuevoUrl = req.body.nuevoUrl;
    url.contador = req.body.contador;

    Url.createUrl(url).then((idGenerado) => {
        console.log('Url created with id: ', idGenerado);
        console.log('URL: ', url.url)
        console.log('nuevURL: ', url.nuevoUrl)
        res.json('URL creada');
    });
}

exports.getOneUrl = (req, res) => {
    //let id = req.params.id;
    let idGenerado = req.params.id;
    console.log("ID_GENERADO: ", idGenerado)
    let nuevoUrl =  req.params.nuevoUrl;

    Url.getUrl(idGenerado).then((url) => {
        if(!url){
            res.status(404).send('No se encontró');
            return;
        }
        res.json(url);  
        console.log("URL NUEVA:", url.nuevoUrl);
    });

}  


exports.updateCounter = (req, res) => {
    let idGenerado = req.params.id;

    var counter;

    Url.getCounter(idGenerado).then((id) => {
        console.log("ID:", id.contador);
        counter = id.contador + 1

        Url.updateCounter(idGenerado, counter).then((id) => {
            res.json('Update counter');
        });
 
    })

    

}