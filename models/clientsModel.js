// models/clientsModel.js
const supabase = require("../config/db");

// Obtener todos los clientes
async function getAllClients() {
  const { data, error } = await supabase
    .from("clients")
    .select("id_cli, nombre_cli, fecha_creacion");
  if (error) throw error;
  return data;
}

// Crear un nuevo cliente
async function createClient(client) {
  const { data, error } = await supabase.from("clients").insert([client]);

  if (error) throw error;
  return data;
}

// Obtener un cliente por ID
async function getClientById(id_cli) {
  const { data, error } = await supabase
    .from("clients")
    .select("id_cli, nombre_cli, fecha_creacion")
    .eq("id_cli", id_cli)
    .single();

  if (error) throw error;
  return data;
}

// Actualizar un cliente
async function updateClient(id_cli, client) {
  const { data, error } = await supabase
    .from("clients")
    .update(client)
    .eq("id_cli", id_cli);

  if (error) throw error;
  return data;
}

// Eliminar un cliente
async function deleteClient(id_cli) {
  const { data, error } = await supabase
    .from("clients")
    .delete()
    .eq("id_cli", id_cli);

  if (error) throw error;
  return data;
}

module.exports = {
  getAllClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
};
