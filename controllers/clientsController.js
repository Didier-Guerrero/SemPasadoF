const ClientsModel = require("../models/clientsModel");

// Mostrar todos los clientes
async function index(req, res) {
  try {
    const clients = await ClientsModel.getAllClients();
    res.render("clients/list", { clients });
  } catch (error) {
    res.status(500).send("Error al obtener clientes");
  }
}

// Mostrar un cliente por su ID
async function show(req, res) {
  try {
    const client = await ClientsModel.getClientById(req.params.id_cli);
    res.render("clients/show", { client });
  } catch (error) {
    res.status(500).send("Error al obtener detalles del cliente");
  }
}

// Mostrar formulario de edición
async function editForm(req, res) {
  try {
    const client = await ClientsModel.getClientById(req.params.id_cli);
    res.render("clients/edit", { client });
  } catch (error) {
    res.status(500).send("Error al cargar el formulario de edición");
  }
}

// Actualizar un cliente
async function update(req, res) {
  try {
    const { nombre_cli } = req.body;
    await ClientsModel.updateClient(req.params.id_cli, { nombre_cli });
    res.redirect("/clients");
  } catch (error) {
    res.status(500).send("Error al actualizar cliente");
  }
}

// Eliminar un cliente
async function remove(req, res) {
  try {
    await ClientsModel.deleteClient(req.params.id_cli);
    res.redirect("/clients");
  } catch (error) {
    res.status(500).send("Error al eliminar cliente");
  }
}

module.exports = {
  index,
  show,
  editForm,
  update,
  remove,
};
