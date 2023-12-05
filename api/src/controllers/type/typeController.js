const { Type } = require("../../db");
const axios = require("axios");
const cleanTypes = require("../../utils/typeutil");

// Función para obtener tipos de Pokémon desde la API y guardarlos en la base de datos
const getTypesApi = async () => {
  try {
    // Realiza una solicitud GET a la API de Pokémon para obtener información sobre los tipos
    const {data} = await axios.get("https://pokeapi.co/api/v2/type");
    
    const response = data.results 
    const typeData = cleanTypes(response)

    return [...typeData]
    // Verifica si la respuesta contiene datos y resultados
    // if (response && response.data && response.data.results) {
    //   const resultApi = response.data.results;

    //   // Mapea los resultados de la API para extraer los nombres de los tipos
    //   const allTypes = resultApi.map((e) => e.name);

    //   // Utiliza Promise.all para ejecutar múltiples operaciones asincrónicas en paralelo
    //   await Promise.all(
    //     allTypes.map((type) => Type.findOrCreate({ where: { name: type } }))
    //   );
      
    //   // Después de crear o buscar tipos en la base de datos, busca y devuelve todos los tipos
    //   const typesDb = await Type.findAll();
    //   return typesDb;
    // } 
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante el proceso
    
    throw error;
  }
};

// Exporta la función para su uso en otros módulos
module.exports = {
  getTypesApi
};