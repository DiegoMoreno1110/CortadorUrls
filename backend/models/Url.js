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
        .where('idGenerado', id)
        .first()
}

exports.getCounter = (id) => {
    return knex
        .select('contador')
        .from('url')
        .where('idGenerado', id)
        .first()
}


exports.updateCounter = (id, contador) => {
    return knex('url')
        .where('idGenerado', id)
        .update('contador', contador);
}
