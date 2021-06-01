const { Router } = require("express");
const { getAllTests } = require("../controllers/test");
const router = Router();

// GET /tests
router.get("/", getAllTests);
module.exports = router;
