// routes/clients.js
const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController");

// Ruta para ver detalles de un cliente
router.get("/:id_cli", clientsController.show);

router.get("/", clientsController.index);
router.get("/:id_cli/edit", clientsController.editForm);
router.post("/:id_cli", clientsController.update);
router.post("/:id_cli/delete", clientsController.remove);

module.exports = router;
