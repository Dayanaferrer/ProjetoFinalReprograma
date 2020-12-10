const express = require("express")
const router = express.Router()
const controller = require("../controllers/instituionsControllers")

router.get("/", controller.getAllInstitutions)
router.get("/:name", controller.getByOrganizatioName)
router.get("/:active/activeSubscriptions", controller.getActiveSubscriptions)
router.post("/", controller.postInstitutions)
router.put("/:id", controller.putInstitutions)
router.delete("/:id", controller.deleteInstitutions)

module.exports = router;