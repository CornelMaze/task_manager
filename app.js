const express = require("express");

const mongoose = require("mongoose");
const url = "mongodb://localhost/Edureka";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect(url, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false,
});
const conn = mongoose.connection;

const path = require("path");

app.use(express.static(path.join(__dirname, "./static")));
const routes = require("./controllers/routes");
const PORT = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

conn.on("open", () => {
 console.log("Connected to Alien database");
});

app.use(routes);
app.listen(PORT, () => {
 console.log(`Server listening on http://localhost:${PORT}`);
});
