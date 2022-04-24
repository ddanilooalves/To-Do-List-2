const personagemService = require('../services/person.service');
const mongoose = require('mongoose');

const homePersonagemController = (req, res) => {
  res.send("home personagens");
};

const findPersonagemController = async (req, res) => {
  const personagem = await personagemService.findPersonagemService();

  if (personagem.length == 0) {
    return res.status(404).send({ message: "Não há nenhum personagem cadastrado!" });
  };
  res.send(personagem);
};

const findPersonagemByIdController = async (req, res) => {
  const param = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(param)) {
    res.status(400).send({ message: "ID inválido!" });
    return;
  };

  const sis = await personagemService.findPersonagemByIdService(param);

  if (!sis) {
    return res.status(404).send({ message: "Personagem não foi encontrado!" });
  };

  res.send(sis)
};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;

  if (!personagem
    || !personagem.nome
    || !personagem.membro
    || !personagem.foto
    ) {
    return res.status(400).send({ message: "Informe todos os campos personagem completo!" });
  };

  const aff = await personagemService.createPersonagemService(personagem);
  res.status(201).send(aff);
};

const updatePersonagemPaletaController = async (req, res) => {
  const param = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(param)) {
    res.status(400).send({ message: "ID inválido!" });
    return;
  };

  const per = req.body;

  if (!per
    || !per.nome
    || !per.membro
    || !per.foto
    ) {
    return res.status(400).send({ message: "Informe todos os campos do personagem completo!" });
  };

  const upd = await personagemService.updatePersonagemService(param, per);
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
