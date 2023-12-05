const axios = require('axios')
const getPokemonByIdController = require('../../controllers/pokemon/pokemonController')
const pokemonAllController = require('../../controllers/pokemon/pokemonController')
const createPokemon = require('../../controllers/pokemon/postPokemonController')

const getPokemonHandler = async (req, res) => {
  try {
    const {name} = req.query;
    const result = name ? await pokemonAllController (name): await pokemonAllController()
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({ error: error.message})
  }
}

const getPokemonIdHandler = async (req, res) =>{
  try {
      const pokeID = req.params.id
      const PokemonsId= await getPokemonByIdController(pokeID)
      res.status(200).send(PokemonsId);
  } catch (error) {
      res.status(400).send({error: error.message})
  }
}

// const getPokemonIdHandler = async (req, res) => {
//   try {
//     const  {id}  = req.params
//     const source = isNaN(id) ? 'db' : 'api';

//     // Llama a la función que obtiene el detalle del Pokémon por ID
//     const pokemonDetail = await getPokemonByIdController(source);

//     res.status(200).json(pokemonDetail);
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// };



const postPokemonsHandler = async (req, res) => {
  const {
    name,
    image,
    hp,
    attack,
    defense,
    types,
  } = req.body
  try {
    const pokemon = await createPokemon(
      name,
      image,
      hp,
      attack,
      defense,
      types
    );
    
    res.status(200).json( pokemon );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {getPokemonHandler, postPokemonsHandler, getPokemonIdHandler}