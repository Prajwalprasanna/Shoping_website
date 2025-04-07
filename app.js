const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use("/static", express.static("static")); // serving the static files

app.set("view engine", "pug"); // setting up the engine template to pug template

app.set("views", path.join(__dirname, "views")); // setting up the path for the views directory
// the __dirname represents the current dir which is replaced with the views dir

app.get("/", (req, res) => {
  const params = {
    title: "Buy@P'Shop",
    content: "This is a content to display",
    para: "This is a footer to display",
  };
  res.status(200).render("index.pug", params);
});

app.listen(port, () => {
  console.log(`The app started on the port ${port}`);
});
