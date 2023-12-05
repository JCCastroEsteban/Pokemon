const express = require('express');
const {getPokemonIdHandler, getPokemonHandler, postPokemonsHandler} = require('../../handlers/pokemon/pokemonHandler')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const pokemonRouter = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

pokemonRouter.get('/', getPokemonHandler)
pokemonRouter.get('/:id', getPokemonIdHandler)
pokemonRouter.post('/', postPokemonsHandler)



module.exports = pokemonRouter