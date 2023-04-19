/**
 * UsuariosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  create: async function (req, res) {
    try {
      const today = new Date();
      const user = await Usuarios.create({
        ...req.body,
        fechaDeCreacion: today,
      }).fetch();
      const response = _.pick(user, ['id', 'nombre', 'apellido', 'correoElectronico', 'edad', 'fechaDeCreacion']);
      return res.json(response);
    } catch (error) {
      return res.serverError(error);
    }
  },
  read: async function (req, res) {
    try {
      const usuarios = await Usuarios.find();
      res.json(usuarios);
    } catch (error) {
      res.serverError(error);
    }
  },
  update: async function (req, res) {
    try {
      const usuario = await Usuarios.updateOne({ id: req.params.id }).set(
        req.body
      );
      res.json(usuario);
    } catch (error) {
      res.serverError(error);
    }
  },
  delete: async function (req, res) {
    try {
      const usuario = await Usuarios.destroyOne({ id: req.params.id });
      res.json(usuario);
    } catch (error) {
      res.serverError(error);
    }
  },
};
