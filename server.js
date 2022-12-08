const express = require("express");
const app = express();
app.use(express.static("public")); // goes to html in public folder.
//app.use(logger);
app.set("view engine", "ejs");
//get route methods below.
/*app.get("/", (req, res) => {
  console.log("here");
  // res.send("MADEit"); // Send is generic for strings and variables.
  // res.sendStatus(200); // 200 status "ok" on screen and in console.
  // res.status(200).send("Hi"); //chainable - "Hi" on screen 200 status "ok" in console.
  // res.status(200).json({ message: "error" }); //status "ok" and json "{message: error}" to screen.
  // res.download("server.js"); // Downloads server.js on opening of page.
  res.render("index", { text: "World" }); // Creates variable text to be used in index.ejs using <%= text %> while locals.text in html kniows to search for text in tbis field skipping error if not found.
});
*/
const userRouter = require("./routes/users");

app.use("/users", userRouter); // All routes starting with users stored in users.
/*
function logger(req, res, next) {
  console.log(req.originalURL); // Shows undefined rather than url.
  next();
}*/
app.listen(3000);
