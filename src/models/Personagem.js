const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true },
    membro: { type: String, required: true },
    foto: { type: String, required: true },
  });

const Personagem = mongoose.model('personagem', PersonagemSchema);

module.exports = Personagem;
