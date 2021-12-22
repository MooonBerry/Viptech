const sqlite3 = require("sqlite3").verbose();
const database = new sqlite3.Database("./database.sqlite3");

database.serialize(() => {
  database.run(
    'INSERT INTO produtos (nome, marca, preco) VALUES ("Câmera interna inteligente Wi-Fi Full HD iM3", "intelbras", 300.00)',
    (err) => {
        console.log('A inserção dos registros funcionou!');
    }
  );
});
