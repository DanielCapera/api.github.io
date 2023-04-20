/**
 * UsuariosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  create: async function (req, res) {
    try {
      const currentDate = sails.helpers.getCurrentDate();
      const user = await Usuarios.create({
        ...req.body,
        fechaDeCreacion: currentDate
      }).fetch();

      sails.log.debug(`Usuario creado con id ${user.id}`);

      const response = _.pick(user, [
        'id',
        'nombre',
        'apellido',
        'correoElectronico',
        'edad',
        'fechaDeCreacion',
      ]);
      return res.json(response);
    } catch (error) {
      sails.log.error(error);
      return res.serverError(error);
    }
  },

  read: async function (req, res) {
    try {
      const usuarios = await Usuarios.find();
      res.json(usuarios);
    } catch (error) {
      sails.log.error(error);
      res.serverError(error);
    }
  },

  update: async function (req, res) {
    try {
      const usuario = await Usuarios.updateOne({ id: req.params.id }).set(
        req.body
      );

      sails.log.debug(`Usuario con id ${req.params.id} actualizado`);

      res.json(usuario);
    } catch (error) {
      sails.log.error(error);
      res.serverError(error);
    }
  },

  delete: async function (req, res) {
    try {
      const usuario = await Usuarios.destroyOne({ id: req.params.id });

      sails.log.debug(`Usuario con id ${req.params.id} eliminado`);

      res.json(usuario);
    } catch (error) {
      sails.log.error(error);
      res.serverError(error);
    }
  },
};
