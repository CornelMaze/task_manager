const router = require("express").Router();
const tasks = require("../models/task");

router.get("/", async (req, res) => {
 try {
  const task = await tasks.find();
  // console.log(task);
  let result = JSON.stringify(task);
  result = JSON.parse(result);
  // console.log(result);
  res.render("index", { data: task });
 } catch (error) {
  console.log(error);
 }
});

router.post("/add", (req, res) => {
 const task = req.body.task;
 tasks({ task: task }).save((err, doc) => {
  if (err) {
   console.log(err);
  }
  res.redirect("/");
 });
});

router.post("/delete", (req, res) => {
 const id = req.body.id;
 tasks.findOneAndRemove({ _id: id }, (err, doc) => {
  res.redirect("/");
 });
});

router.post("/update", (req, res) => {
 const id = req.body.id;
 tasks.findOneAndUpdate({ _id: id }, { status: true }, (err, doc) => {
  res.redirect("/");
 });
});

module.exports = router;
