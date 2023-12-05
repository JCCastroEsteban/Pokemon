
const {pokemon, type, } = require('../../db');
const axios = require('axios')

// Función para obtener datos de Pokémon desde la API
const getPokemons = async () => {
  try {
    // Realiza una solicitud GET a la API de Pokémon
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');

    // Obtiene la lista de resultados de la API
    const pokemonApi = data.results;

    // Mapea cada resultado para obtener detalles específicos de cada Pokémon
    const pokemonInfo = await Promise.all(pokemonApi.map(async (pokemon) => {
        // Realiza una solicitud GET a la URL de cada Pokémon
      const { data: pk } = await axios.get(pokemon.url);

      // Extrae la información específica de cada Pokémon
      const pkInfo = {
        id: pk.id,
        name: pk.name,
        types: pk.types.map((e) => e.type.name),
        image: pk.sprites.other['official-artwork'].front_default,
        hp: pk.stats[0].base_stat,
        attack: pk.stats[1].base_stat,
        defense: pk.stats[2].base_stat,
      };

      return pkInfo;
    }));

    return pokemonInfo;
  } catch (error) {
    throw error;
  }
};


// Función para obtener datos de Pokémon desde la base de datos

const getPokemonBb = async () =>{
  try {
    const pokemonBd = await pokemon.findAll({
      // Busca en la tabla los modelos que necesitas, incluyendo los tipos
      include: {
        model: type,
        attributes: ['name'] // trar solo el nombre del tipo 
      }
    });

    // Mapea los datos de la base de datos a un formato deseado

  const pokeMap = pokemonBd.map((pk) => {
    return {
      id: pk.id,
      name: pk.name,
      image: pk.image,
      types: pk.Types?.map((pk) => pk.name) || [],
      hp: pk.hp,
      attack: pk.attack,
      defense: pk.defense,
      
    };
  });

  return pokeMap
  } catch (error) {
    throw error 
  }
}

// // Función para obtener todos los Pokémon (desde API y base de datos)
const pokemonAllController = async (name) => {
  try {
    // Obtiene la lista de Pokémon de la API y de la base de datos
    const pokemonGetApi = await getPokemons();
    const pokemonGetBd = await getPokemonBb();

    // Combina los resultados de la API y la base de datos
    const pokemonAll = [...pokemonGetBd, ...pokemonGetApi];

    // Filtra por nombre si se proporciona un nombre
    if (name) {
      const pokemonName = pokemonAll.filter(
        (pk) => pk.name.toLowerCase() === name.toLowerCase()
      );

      if (pokemonName.length > 0) {
        return pokemonName;
      } 
    }

    // Si no se proporciona un nombre, devuelve todos los Pokémon
    return pokemonAll;
  } catch (error) {
    throw error;
  }
};

const getPokemonByIdController = async (id) => {
  const all = await pokemonAllController();
  
  // Filtra los Pokémon por ID
  const byId = await all.filter((e) => String(e.id) === id);
  
  if (byId) {
    return byId;
  } else {
    throw new Error(`el pokemon no se encuentra por: ${id}`);
  }
};

module.exports = pokemonAllController, getPokemonByIdController, getPokemonBb




