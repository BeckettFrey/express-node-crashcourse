const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user list");
});

router.post("/", (req, res) => {
  res.send("create user");
});
router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    user.push({ firstname: req.body.firstname });
    res.redirect("/users${users.length - 1}");
  } else {
    console.log("error");
  }
  console.log(req.body.firstname);
});
router.get("/new", (req, res) => {
  res.render("users/new");
});
//Chaining routes used below.
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send("Get user with id " + req.params.id);
  })
  .put((req, res) => {
    res.send("Update user with id " + req.params.id);
  })
  .delete((req, res) => {
    res.send("Delete user with id " + req.params.id);
  });
const users = [{ name: "sally" }, { name: "neil" }];
// Middleware type below uses next to leave function following call and continues.
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
