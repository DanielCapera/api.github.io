/**
 * Default model settings
 * (sails.config.models)
 *
 * Your default, project-wide model settings. Can also be overridden on a
 * per-model basis by setting a top-level properties in the model definition.
 *
 * For details about all available model settings, see:
 * https://sailsjs.com/config/models
 *
 * For more general background on Sails model settings, and how to configure
 * them on a project-wide or per-model basis, see:
 * https://sailsjs.com/docs/concepts/models-and-orm/model-settings
 */

module.exports.models = {
  datastore: 'default',
  migrate: 'alter',
  attributes: {
    // Atributos del modelo Usuarios
    id: { type: 'number', autoIncrement: true },
    nombre: { type: 'string', required: true },
    apellido: { type: 'string', required: true },
    correoElectronico: { type: 'string', required: true, unique: true },
    edad: { type: 'number', allowNull: true },
    fechaDeCreacion: { type: 'ref', columnType: 'datetime' },
  },
  // Configuración de las conexiones con las bases de datos
  datastores: {
    default: {
      adapter: 'sails-mysql',
      url: 'mysql://root:Proyecto2023@localhost:3306/cine',
    },
  },
};
