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

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 50]
    }
  },

  descripción: {
    type: DataTypes.TEXT,
  },

  imagen: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  nacionalidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  fecha_de_nacimiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{ timestamps: false, });
};