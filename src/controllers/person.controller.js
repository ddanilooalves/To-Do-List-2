const personagemService = require('../services/person.service');

const homePersonagemController = (req, res) => {
  res.send("home personagens");
};

const findPersonagemController = (req, res) => {
  res.send(personagemService.findPersonagemService());
};

const findPersonagemByIdController = (req, res) => {
  res.send(personagemService.findPersonagemByIdService(req.params.id));
};

const createPersonagemController = (req, res) => {
  res.send(personagemService.createPersonagemService(req.body));
};

const updatePersonagemPaletaController = (req, res) => {
  res.send(personagemService.updatePersonagemService(+req.params.id, req.body));
};

const deletePersonagemController = (req, res) => {
  personagemService.deletePersonagemService(req.params.id);
  res.send({ message: 'Personagem deletado(a) com sucesso!' });
};


const addPersonagemController = (req, res) => {
  let retorno = personagemService.addPersonagemService(req.body);
  if (retorno == "ok") {
    res.send('Personagem cadastrado com sucesso!');
  } else {
    res.send('Houve um erro!');
  }
};

module.exports = {
    findPersonagemController,
    findPersonagemByIdController,
    homePersonagemController,
    addPersonagemController,
    createPersonagemController, 
    updatePersonagemPaletaController,
    deletePersonagemController,
  };
