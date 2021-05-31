const express = require("express");

const config = require("./config/config");

//create an instance of express
const app = express();
const PORT = config.PORT || process.env.PORT || 4040;
app.use("/", (req, res) => {
    return res.send("Hello Server");
});
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
