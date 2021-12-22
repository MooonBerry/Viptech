const modelos = require('./modelos');

modelos.Produto
  .fetchAll()
  .then(produtos => {
    console.log(produtos.toJSON());
  });
