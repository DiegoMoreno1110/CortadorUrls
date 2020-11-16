const knex = require('../database/connection');

exports.createUrl = (urls) => {
    return knex('url')
        .insert({
            url: urls.url,
            idGenerado: urls.idGenerado,
            nuevoUrl: urls. nuevoUrl,
            contador: urls.contador
        });
}

exports.getUrl = (id) => {
    return knex
        .select('*')
        .from('url')
        .where('id', id)
        .first()
}

