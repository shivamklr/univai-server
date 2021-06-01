const { Router } = require("express");
const { createTest, addQuestion, addAnswer, getTest } = require("../controllers/test");
const router = Router();

// POST /test
router.post("/", createTest);

module.exports = router;
