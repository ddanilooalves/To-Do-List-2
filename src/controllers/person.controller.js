const personagemService = require('../services/person.service');
const mongoose = require('mongoose');

const homePersonagemController = (req, res) => {
  res.send("home personagens");
};

const findPersonagemController = async (req, res) => {
  const allPersonagem = await personagemService.findPersonagemService();

  if (allPersonagem.length == 0) {
    return res.status(404).send({ message: "Não há nenhum personagem cadastrado!" });
  };
  res.send(allPersonagem);
};

const findPersonagemByIdController = async (req, res) => {
  const param = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(param)) {
    res.status(400).send({ message: "ID inválido!" });
    return;
  };

  const idParam = await personagemService.findPersonagemByIdService(param);

  if (!idParam) {
    return res.status(404).send({ message: "Personagem não foi encontrado!" });
  };

  res.send(idParam)
};

const createPersonagemController = async (req, res) => {
  const createPersonagem = req.body;

  if (!createPersonagem
    || !createPersonagem.nome
    || !createPersonagem.membro
    || !createPersonagem.foto
    ) {
    return res.status(400).send({ message: "Informe todos os campos personagem completo!" });
  };

  const goCreate = await personagemService.createPersonagemService(createPersonagem);
  res.status(201).send(goCreate);
};

const updatePersonagemPaletaController = async (req, res) => {
  const upParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(upParam)) {
    res.status(400).send({ message: "ID inválido!" });
    return;
  };

  const upPerson = req.body;

  if (!upPerson
    || !upPerson.nome
    || !upPerson.membro
    || !upPerson.foto
    ) {
    return res.status(400).send({ message: "Informe todos os campos do personagem completo!" });
  };

  const upd = await personagemService.updatePersonagemService(upParam, upPerson);
  res.send(upd);
};

const deletePersonagemController = async (req, res) => {
  const param = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(param)) {
    res.status(400).send({ message: "ID inválido!" });
    return;
  };

  await personagemService.deletePersonagemService(param);
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
