const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const { PORT = "3000" } = process.env;
const HOST = "0.0.0.0";

const app = express();

mongoose.connect(
  "mongodb+srv://usu_omnistack:pwd_omnistack@fish-xxoc1.mongodb.net/omnistack-10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, HOST);
