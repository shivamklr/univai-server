const { Router } = require("express");
const { createTest, addQuestion, addAnswer, getTest } = require("../controllers/test");
const router = Router();

// POST /test
router.post("/", createTest);

// GET /test
router.get("/", getTest);
module.exports = router;
