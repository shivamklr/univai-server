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
