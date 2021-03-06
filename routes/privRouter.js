// from mongoose doc
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

var express = require("express");
var privRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const User = require("../models/User.model");
const Tips = require("../models/Tips.models");

// GET /tips - render tips page
privRouter.get("/myprofile", isLoggedIn, (req, res, next) => {
  const userid = req.session.currentUser._id;

  User.findById(userid)
    .populate("createdTips")
    .then((oneUser) => {
      const userObj = { user: oneUser };
      const props = userObj;
     
      res.render("MyProfile", props);
    })
    .catch((err) => console.log(err));
});

// CREATE TIP render the form
privRouter.get("/createtip", isLoggedIn, (req, res, next) => {
  const userid = req.session.currentUser._id;
  User.findById(userid)
    .then((oneUser) => {
      const userObj = { user: oneUser };
      const props = userObj;
     
      res.render("CreateTip", props);
    })
    .catch((err) => console.log(err));
});

//POST recieves the data from create tip form
privRouter.post("/createtip", isLoggedIn, (req, res, next) => {
  // Destructure the values coming from the POST form
  const { title, description, text, image } = req.body;
  const userId = req.session.currentUser._id;
  console.log("session id to add to createdby field:", userId);
  Tips.create({ title, description, text, userId: userId, image })
    .then((tip) => {
      const pr = User.findByIdAndUpdate(
        userId,
        { $push: { createdTips: tip._id } },
        { new: true }
      );
      return pr;
    })
    .then((updatedUser) => {
      res.redirect(`/alltips`);
    })
    .catch((error) => console.log(error));
});

privRouter.get(`/mytipslist`, isLoggedIn, (req, res, next) => {
  const userid = req.session.currentUser._id;
  User.findById(userid)
    .populate("createdTips") // this is the new line to populate
    .then((oneUser) => {
      //const props = { oneUser: oneUser };

      const userObj = { user: oneUser };
      const props = userObj;


     // console.log("props my tips list", props);
      res.render("MyTipsList", props);
    })
    .catch((err) => console.log(err));
});

/* GET search details page */
privRouter.get("/mytipdetail", (req, res, next) => {
  const { tipid } = req.query;

  console.log("mytipdetail", req.query)

  // Find the specific tip by `_id`
  Tips.findOne({ _id: tipid })
    .then((oneTip) => {
      const props = { oneTip: oneTip };
      res.render("MyTipDetail", props);
    })
    .catch((err) => console.log(err));
});

//GET  /update tip -render update tip form
privRouter.get("/tips/edit", isLoggedIn, (req, res, next) => {
  const userid = req.session.currentUser._id;
  User.findById(userid)
  .then((oneUser) => {
    const props = { oneUser: oneUser };
  })

  const { tipid } = req.query;
  // Find the specific tip by `_id`
  Tips.findOne({ _id: tipid })
    .then((oneTip) => {
      const props = { oneTip: oneTip };
      res.render("UpdateTip", props);
    })
    .catch((err) => console.log(err));
});

// POST  /tips/update
privRouter.post("/tips/edit", isLoggedIn, (req, res, next) => {
  const { tipid } = req.query;
  const { title, description, text, image } = req.body;
  console.log("tipid:", tipid)

  Tips.findByIdAndUpdate(
    tipid,
    { title, description, text, image },
    { new: true }
    //{new : true} is used to get the updated document version returned after the update
  )
    .then((updatedTip) => {
      res.redirect("/private/mytipslist");
    })
    .catch((error) => console.error(error));
});

// DELETE /tips - delete a tip
//GET  /delete tip -render delete tip form
/*privRouter.get("/tips/delete", isLoggedIn, (req, res, next) => {
  const { tipid } = req.query;

  // Find the specific tip by `_id`
  Tips.findOne({ _id: tipid })
    .then((oneTip) => {
      const props = { oneTip: oneTip };
      res.render("DeleteTip", props);
    })
    .catch((err) => console.log(err));
});*/

privRouter.post("/tips/delete",isLoggedIn, (req, res, next) => {
  const {tipid}  = req.query;
  console.log("{tipid}  = req.query", req.query)
 //Tips.deleteOne({ _id: tipid })
 Tips.findByIdAndRemove({_id: tipid})
    .then(() => {
      //console.log("deleted: ",deletedTip)
      res.redirect("/private/mytipslist");
    })
    .catch((error) => console.error(error));
});

module.exports = privRouter;

