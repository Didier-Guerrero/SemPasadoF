// controllers/contractsController.js

const ContractsModel = require("../models/contractsModel");

// Mostrar el formulario para filtrar contratos
function filterForm(req, res) {
  res.render("contracts/filter");
}

// Filtrar contratos por fecha
async function filterByDate(req, res) {
  try {
    const { start_date, end_date } = req.query;

    console.log("Fechas recibidas en el controlador:", {
      start_date,
      end_date,
    });

    if (!start_date || !end_date) {
      return res.status(400).send("Debes proporcionar ambas fechas");
    }

    // Realizar la consulta en la base de datos
    const contracts = await ContractsModel.getContractsByDate(
      start_date,
      end_date
    );

    console.log("Contratos obtenidos:", contracts);

    if (contracts.length > 0) {
      res.render("contracts/list", { contracts });
    } else {
      res.send(
        "No se encontraron contratos en el rango de fechas seleccionado."
      );
    }
  } catch (error) {
    console.error("Error al filtrar contratos:", error);
    res.status(500).send("Error al filtrar contratos");
  }
}

// Obtener todos los contratos
async function getAllContracts(req, res) {
  try {
    const contracts = await ContractsModel.getAllContracts();
    res.render("contracts/list", { contracts });
  } catch (error) {
    res.status(500).send("Error al obtener contratos");
  }
}

// Mostrar detalles de un contrato
async function show(req, res) {
  try {
    const contract = await ContractsModel.getContractById(req.params.id_con);
    res.render("contracts/show", { contract });
  } catch (error) {
    res.status(500).send("Error al obtener los detalles del contrato");
  }
}

// Mostrar formulario de edición de un contrato
async function editForm(req, res) {
  try {
    const contract = await ContractsModel.getContractById(req.params.id_con);
    contract.fecha_con = new Date(contract.fecha_con);

    res.render("contracts/edit", { contract });
  } catch (error) {
    res.status(500).send("Error al cargar el formulario de edición");
  }
}

async function update(req, res) {
  try {
    const { nombre_con, monto_con, fecha_con, clientid } = req.body;
    await ContractsModel.updateContract(req.params.id_con, {
      nombre_con,
      monto_con,
      fecha_con,
      clientid,
    });
    res.redirect("/contracts/all");
  } catch (error) {
    res.status(500).send("Error al actualizar el contrato");
  }
}

// Eliminar un contrato
async function remove(req, res) {
  try {
    await ContractsModel.deleteContract(req.params.id_con);
    res.redirect("/contracts/all");
  } catch (error) {
    res.status(500).send("Error al eliminar el contrato");
  }
}

module.exports = {
  filterForm,
  filterByDate,
  getAllContracts,
  show,
  editForm,
  update,
  remove,
};
