const supabase = require("../config/db");

// Obtener contratos filtrados por rango de fechas
async function getContractsByDate(start_date, end_date) {
  console.log("Consultando contratos desde:", start_date, "hasta:", end_date);

  const { data, error } = await supabase
    .from("contracts")
    .select("*")
    .gte("fecha_con", start_date)
    .lte("fecha_con", end_date);

  if (error) {
    console.error("Error en la consulta de contratos:", error);
    throw error;
  }

  console.log("Resultados obtenidos de la base de datos:", data);
  return data;
}

// Obtener todos los contratos
async function getAllContracts() {
  const { data, error } = await supabase.from("contracts").select("*");

  if (error) throw error;
  return data;
}

// Obtener un contrato por ID
async function getContractById(id_con) {
  const { data, error } = await supabase
    .from("contracts")
    .select("*")
    .eq("id_con", id_con)
    .single();

  if (error) throw error;
  return data;
}

// Actualizar un contrato
async function updateContract(id_con, contract) {
  const { data, error } = await supabase
    .from("contracts")
    .update(contract)
    .eq("id_con", id_con);

  if (error) throw error;
  return data;
}

// Eliminar un contrato
async function deleteContract(id_con) {
  const { data, error } = await supabase
    .from("contracts")
    .delete()
    .eq("id_con", id_con);

  if (error) throw error;
  return data;
}

module.exports = {
  getContractsByDate,
  getAllContracts,
  getContractById,
  updateContract,
  deleteContract,
};
