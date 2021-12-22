const createKnex = require('knex');

const knex = createKnex({
  client: 'sqlite3',
  debug: true,
  useNullAsDefault: true,
  connection: {
    filename: './database.sqlite3',
  }
});
const bookshelf = require('bookshelf')(knex);

const Produto = bookshelf.model('Produto', {
  tableName: 'produtos',
});

exports.Produto = Produto;