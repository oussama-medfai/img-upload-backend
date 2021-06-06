const express = require("express");
const cors = require("cors");
const app = express();
const webRoutes = require("./routes/web");

app.use(cors());
app.use("/uploads", express.static(__dirname + "/uploads"));

// Front Routes handling
app.use(webRoutes);

app.listen(5000);
