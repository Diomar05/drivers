const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {

    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 50]
      }
    },
      
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [0, 50]
      }
    },

    description: {
      type: DataTypes.TEXT,
    },

    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    birthdate: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },

  { timestamps: false, });
};