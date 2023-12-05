const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
sequelize.define("type", {

  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  timestamps: false
});
};
