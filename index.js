const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;
require("express-async-errors");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

require("./routes")(app);

app.listen(PORT, () => console.log(`CI server listening on port ${PORT}!`));
