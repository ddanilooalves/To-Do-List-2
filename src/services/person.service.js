const Personagem = require('../models/Personagem');

  const findPersonagemService = async () => {
    const personagem = await Personagem.find();
    return personagem;
  };
  
  const findPersonagemByIdService = async (id) => {
    const personagem = await Personagem.findById(id);
    return personagem
  };

  const addPersonagemService = (personagens) => {
    personagem.push(personagens);
    return "ok";
  };

  const createPersonagemService = (newPersonagem) => {
    const newId = personagem.length + 1;
    newPersonagem.id = newId;
    personagem.push(newPersonagem);
    return newPersonagem;
  };

  const updatePersonagemService = (id, personagemEdited) => {
    personagemEdited['id'] = id;
    personagem[personagem.findIndex((personagens) => personagens.id == id)] = personagemEdited;
    return personagemEdited;
  };

  const deletePersonagemService = (id) => {
    return personagem.splice(personagem.findIndex((personagens) => personagens.id == id), 1);
  };
  
  module.exports = {
    findPersonagemService,
    findPersonagemByIdService,
    addPersonagemService,
    createPersonagemService,
    updatePersonagemService,
    deletePersonagemService,
  };
