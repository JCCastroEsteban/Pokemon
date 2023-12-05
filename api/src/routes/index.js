const express = require('express');
const router = express.Router();


const getPokemonsRoute = require('./pokemon/pokemon.router');
const postPokemonRoute = require('./pokemon/postPokemonRoute');
const getTypeRouter = require('./type/type.router');

router.use('/pokemon', getPokemonsRoute)
router.use('/pokemon/:id', getPokemonsRoute)
router.use('/pokemon/', postPokemonRoute)
router.use('/type', getTypeRouter)

module.exports = router