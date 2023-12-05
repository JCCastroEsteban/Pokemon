const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define("pokemon", {

    id: {
      type: DataTypes.UUID, // es un codigo de numeros, letras y guiones alfanumerico 
      defaultValue: DataTypes.UUIDV4, // crea un numero aleatorio  
      primaryKey: true,
      
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hp: {
      type: DataTypes.INTEGER,
      validate: { min: 1 },
      allowNull: false
    },

    attack: {
      type: DataTypes.INTEGER,
      validate: { min: 1 },
      allowNull: false
    },

    defense: {
      type: DataTypes.INTEGER,
      validate: { min: 1 },
      allowNull: false
    },
  });
};

