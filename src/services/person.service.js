const Personagem = require('../models/Personagem');

  const findPersonagemService = async () => {
    const personagem = await Personagem.find();
    return personagem;
  };
  
  const findPersonagemByIdService = async (id) => {
    const personagem = await Personagem.findById(id);
    return personagem;
  };

  const addPersonagemService = (personagens) => {
    personagem.push(personagens);
    return "ok";
  };

  const createPersonagemService = async (newPersonagem) => {
    const nePersonagens = await Personagem.create(newPersonagem);
    return nePersonagens;
  };

  const updatePersonagemService = async (id, personagemEdited) => {
    const personagemUp = await Personagem.findByIdAndUpdate(id, personagemEdited);
    return personagemUp;
  };

  const deletePersonagemService = async (id) => {
    return await Personagem.findByIdAndDelete(id);
  };
  
  module.exports = {
    findPersonagemService,
    findPersonagemByIdService,
    addPersonagemService,
    createPersonagemService,
    updatePersonagemService,
    deletePersonagemService,
  };
