const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('./database.sqlite3');

database.serialize(() =>{
    database.run('CREATE TABLE produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR, marca VARCHAR, preco DOUBLE)', (err) => {
        console.log('A criação da tabela funcionou!')
    });
});

database.close()