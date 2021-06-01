const express = require("express");

const config = require("./config/config");
const db = require("./config/mongoose");
const router = require("./routes");
//create an instance of express
const app = express();
const PORT = config.PORT || process.env.PORT || 4040;
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
