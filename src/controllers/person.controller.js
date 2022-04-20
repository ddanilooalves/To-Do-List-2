const personagemService = require('../services/person.service');

const homePersonagemController = (req, res) => {
  res.send("home personagens");
};

const findPersonagemController = async (req, res) => {
  const perso = await personagemService.findPersonagemService();
  if (perso.length == 0) {
    return res.status(404).send({ message: "Não há nenhum personagem cadastrado!" });
  };
  res.send(perso);
};

const findPersonagemByIdController = async (req, res) => {
  const param = Number(req.params.id);

  if (!mongoose.types.ObjectId.isValid(param)) {
    res.status(400).send({ message: "ID inválido!" });
    return;
  };

  const sis = await personagemService.findPersonagemByIdService(param);

  if (!sis) {
    return res.status(404).send({ message: "Personagem não foi encontrado!" });
  };

  res.send(sis)
};

const createPersonagemController = (req, res) => {
  const personagem = req.body;

  if (!personagem 
    || !personagem.id
    || !personagem.nome
    || !personagem.membro
    || !personagem.foto
    ) {
    return res.status(400).send({ message: "Informe todos os campos personagem completo!" });
  };

  res.status(201).send(personagemService.createPersonagemService(personagem));

};

const updatePersonagemPaletaController = (req, res) => {
  const param = Number(req.params.id);

    if (!param) {
      return res.status(400).send({ message: "ID inválido!" });
    };

  const per = req.body;

  if (!per 
    || !per.id
    || !per.nome
    || !per.membro
    || !per.foto
    ) {
    return res.status(400).send({ message: "Informe todos os campos do personagem completo!" });
  };
  res.send(personagemService.updatePersonagemService(param, per));
};

const deletePersonagemController = (req, res) => {
  const param = Number(req.params.id);

  if (!param) {
    return res.status(400).send({ message: "ID inválido!" });
  };

  personagemService.deletePersonagemService(param);
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
