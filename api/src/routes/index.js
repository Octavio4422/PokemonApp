const { Router } = require('express');
const router = Router();
// Importar todos los routers;
const pokemonsRoute = require('./pokemons');
const typesRoute = require('./types');

// Configurar los routers
router.use('/pokemons', pokemonsRoute);
router.use('/types', typesRoute)

module.exports = router;
