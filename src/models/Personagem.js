const mongooose = require('mongoose');

const PersonagemSchema = new mongooose.Schema({
    id: { type: Number, required: true },
    nome: { type: String, required: true },
    membro: { type: String, required: true },
    foto: { type: String, required: true },
  });

const Personagem = mongooose.model('personagem', PersonagemSchema);

module.exports = Personagem;
