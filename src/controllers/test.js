const Test = require("../models/Test");
const { validateField } = require("../utils/validate");
module.exports.createTest = async (req, res) => {
    const { name } = req.body;
    if (!validateField(name) || !(name.length <= 20)) {
        return res.status(422).json({ message: "Validation Failed" });
    }
    try {
        const test = await Test.create({ name });
        return res.status(201).json({ data: { test } });
    } catch (e) {
        return res.status(500).json({ errors: e.message });
    }
};
module.exports.getTest = async (req, res) => {
    const { testId } = req.query;
    if (!validateField(testId)) {
        return res.status(422).json({ message: "Validation Failed" });
    }
    try {
        const test = await Test.findById(testId);
        if (!test) throw Error("Test does not exist");
        return res.status(200).json({ data: { test } });
    } catch (error) {
        return res.status(500).json({ errors: error.message });
    }
};
module.exports.addQuestion = async (req, res) => {
    const { testId, title, choices } = req.body;
    if (!validateField(testId) || !validateField(title)) {
        return res.status(422).json({ message: "Validation Failed" });
    }
    try {
        const test = await Test.findOne({ _id: testId });
        const questionsLength = test.questions.push({ title, choices });
        test.save((err) => {
            if (err) throw err;
        });
        return res
            .status(201)
            .json({ data: { question: test.questions[questionsLength - 1] } });
    } catch (error) {
        return res.status(500).json({ errors: error.message });
    }
};
module.exports.addAnswer = async (req, res) => {
    const { testId, questionId, answerId } = req.body;
    if (
        !validateField(testId) ||
        !validateField(questionId) ||
        !validateField(answerId)
    ) {
        return res.status(422).json({ message: "Validation Failed" });
    }
    try {
        const test = await Test.findOne({ _id: testId });
        const choice = test.questions.id(questionId).choices.id(answerId);
        if (!choice) throw Error("Choice does not exist");
        test.questions.id(questionId).answerId = answerId;
        test.save((err) => {
            if (err) throw err;
        });
        return res.status(201).json({
            data: { answerId: test.questions.id(questionId).answerId },
        });
    } catch (error) {
        return res.status(500).json({ errors: error.message });
    }
};
module.exports.getAllTests = async (req, res) => {
    try {
        const tests = await Test.find({}).select("visibility _id name");
        return res.status(200).json({ data: { tests } });
    } catch (error) {
        return res.status(500).json({ errors: error.message });
    }
};
