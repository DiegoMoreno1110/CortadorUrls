const Url = require('../models/Url');

exports.createUrl =  (req, res) => {
    let url = {};
    url.url = req.body.url;
    url.idGenerado = req.body.idGenerado;
    url.nuevoUrl = req.body.nuevoUrl;
    url.contador = req.body.contador;

    Url.createUrl(url).then((id) => {
        console.log('Url created with id: ', id);
        console.log('URL: ', url.url)
        res.json('URL creada');
    });
}

exports.getOneUrl = (req, res) => {

    let id = req.params.id;
    let nuevoUrl =  req.params.nuevoUrl;

    Url.getUrl(id).then((url) => {
        if(!url){
            res.status(404).send('No se encontró');
            return;
        }
        res.json(url);  
        console.log("URL NUEVA:", url.nuevoUrl);
        return res.redirect(url.nuevoUrl);
    });

}  

/*
table.increments('id');
        table.string('url', 512).notNullable();
        table.string('idGenerado', 512).notNullable();
        table.string('nuevoUrl', 512).notNullable();
        table.integer('contador').notNullable().defaultTo(1);
        table.timestamps(true, true);

*/