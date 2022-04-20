const mongoose = require('mongoose');

const databaseConec = () => {
    mongoose.connect('mongodb://localhost:27017/personagem', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Conectado!")
    })
    .catch((err) => {
        return console.log(`Falha ao conectar no MongoDB, erro: ${err}`);
    });
}

module.exports = databaseConec;
