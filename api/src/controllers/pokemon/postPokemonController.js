
const { pokemon, type } = require('../../db');

const createPokemon = async (name, image, hp, attack, defense, types) => {
    try {
      if (!types || !types.name) {
        throw new Error("Invalid 'types' value");
      }
  
      const existingTypes = await type.findAll({
        where: { name: types.name }
      });
  
      const newPokemon = await pokemon.create({
        name,
        image,
        hp,
        attack,
        defense,
        types: types.name
      });
  
      await newPokemon.addType(existingTypes);
  
      return newPokemon;
    } catch (error) {
        throw error
       }
  };



module.exports =  createPokemon
// const pokemonCt = await createPokemon();
// pokemonCt.push(createPokemon)