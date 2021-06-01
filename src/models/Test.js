const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    choices: [{ choice: String }],
    answerId: mongoose.ObjectId,
});

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    questions: [QuestionSchema],
    visibility: { type: Boolean, default: false },
});
const Test = mongoose.model("Test", TestSchema);
module.exports = Test;
