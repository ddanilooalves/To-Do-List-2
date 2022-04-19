const express = require('express');
const router = express.Router();

const personagemController = require('../controllers/person.controller');

router.get('/', personagemController.homePersonagemController);
router.get('/find-personagem', personagemController.findPersonagemController);
router.get('/find-personagem/:id', personagemController.findPersonagemByIdController);
router.post('/create', personagemController.createPersonagemController);
router.put('/update/:id', personagemController.updatePersonagemPaletaController);
router.delete('/delete/:id', personagemController.deletePersonagemController);

router.post('/add',personagemController.addPersonagemController);

router.delete('/delete',);

module.exports = router;
