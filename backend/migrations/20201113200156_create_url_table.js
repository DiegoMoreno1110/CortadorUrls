
exports.up = function(knex) {
    return knex.schema
    .createTable('url', (table) => {
        table.increments('id');
        table.string('url', 512).notNullable();
        table.string('idGenerado', 512).notNullable();
        table.string('nuevoUrl', 512).notNullable();
        table.integer('contador').notNullable().defaultTo(1);
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('url');
};