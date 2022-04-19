const express = require('express');
const cors = require('cors');
const port = 3001;
const app = express();
const route = require('./src/routes/person.routes');

app.use(cors());
app.use(express.json());

app.use('/personagem', route);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
