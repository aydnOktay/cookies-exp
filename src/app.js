const express = require("express")
const connectDb = require("./config/db");  //veritabanı ile bağlantı kuran modül 
const userModel = require("./models/user.model")  //veritabanı modelleri 
const session = require("express-session");
const cookieParser = require("cookie-parser");

const compression = require("compression")
const app = express();
const port = 5000;
const path = require("path");
let options = {
  etag: false,
  maxAge: "5000",
};


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "..", "public"), options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.listen(5000, async () => {
  try {
    await connectDb();
    app.use("/admin", require("./backend"));
    app.use("/", require("./pages"));
    console.log("Connected to database");
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
})