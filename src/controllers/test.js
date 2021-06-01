const Test = require("../models/Test");
module.exports.createTest = async (req, res) => {
    // TODO: validate name
    const { name } = req.body;
    try {
        const test = await Test.create({ name });
        return res.status(201).json({ data: { test } });
    } catch (e) {
        return res.status(500).json({ errors: e.message });
    }
};
module.exports.getTest = async (req, res) => {
    // TODO: validate testId
    const { testId } = req.query;
    try {
        const test = await Test.findById(testId);
        if (!test) throw Error("Test does not exist");
        return res.status(200).json({ data: { test } });
    } catch (error) {
        return res.status(500).json({ errors: error.message });
    }
};
module.exports.addQuestion = async (req, res) => {
    // TODO: validate data
    const { testId, title, choices } = req.body;
    try {
        const test = await Test.findOne({ _id: testId });
        test.questions.push({ title, choices });
        test.save((err) => {
            if (err) throw err;
        });
        return res.status(201).json({ data: { test } });
    } catch (error) {
        return res.status(500).json({ errors: error.message });
    }
};
