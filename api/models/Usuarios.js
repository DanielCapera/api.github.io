/**
 * Usuarios.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nombre: {
      type: 'string',
      required: true,
    },
    apellido: {
      type: 'string',
      required: true,
    },
    correoElectronico: {
      type: 'string',
      required: true,
      unique: true,
    },
    edad: {
      type: 'number',
    },
    fechaDeCreacion: {
      type: 'string',
      required: true,
      columnType: 'datetime',
    },
  },
};
