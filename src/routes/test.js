const { Router } = require("express");
const { createTest, addQuestion, addAnswer, getTest } = require("../controllers/test");
const router = Router();

// POST /test
router.post("/", createTest);

// PATCH /test/question
router.patch("/question", addQuestion);

// PATCH /test/question/answer
router.patch("/question/answer", addAnswer);

// GET /test
router.get("/", getTest);
module.exports = router;
