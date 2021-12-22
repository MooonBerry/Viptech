const modelos = require('./modelos');

const produto = new modelos.Produto({
  nome: 'Câmera DS-2CD 2583G2-I',
  marca: 'Hikvision',
  preco: 645.00
});

produto.save()
  .then(() => {
    console.log('A inserção funcionou');
  });