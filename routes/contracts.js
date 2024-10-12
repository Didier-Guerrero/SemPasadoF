const express = require("express");
const router = express.Router();
const contractsController = require("../controllers/contractsController");

router.get("/filter", contractsController.filterForm);

router.get("/filter/results", contractsController.filterByDate);
router.get("/all", contractsController.getAllContracts);
router.get("/:id_con", contractsController.show);
router.get("/:id_con/edit", contractsController.editForm);
router.post("/:id_con", contractsController.update);
router.post("/:id_con/delete", contractsController.remove);

module.exports = router;
