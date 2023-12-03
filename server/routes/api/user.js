const express = require('express');
const router = express.Router();
const users = require('../../Models/userModel');
let currentUserId = 6;


/**
 * @route POST api/jobs/
 * @desc based on request action property, return a user or create a user
 **/

router.post('/', async (req,res) => {
  try {
    if (req.body.action == "login") {
      let userFound = {role:"null"};
      userFound = await users.find(req.body.email);
      console.log(userFound);
      if (userFound[0].password === req.body.password.password){
        console.log("PW checked");
        return res.json(userFound);
      } else {
        console.log(userFound[0].password);
        console.log(req.body.password);
        return res.json(userFound);
      }
    } else if (req.body.action == "signup") {
      // Check if email already registered
      const existingUser = await users.find({email: req.body.email});
      if (existingUser.length > 0) {
        console.log(await users.find({email:req.body.email}));
        return res.status(500).json({ result: "error", reason: "Email Existed" });
      }
      // check if the req body contain areaOfInterest
      // if yes, it is a job seeker
      // else it is a client
      let returnData = {};
      if (req.body.areaOfInterest) {
        console.log("hi" + currentUserId)
      const newUser = {
        _id: currentUserId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        email: req.body.email,
        password: req.body.password,
        areaOfInterest: req.body.areaOfInterest,
      };
      const request = new users(newUser);
      request.save();
      returnData = {
        result: "success",
        userId: currentUserId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        areaOfInterest: req.body.areaOfInterest,
      };
    } else {
      const newUser = {
        _id: currentUserId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        email: req.body.email,
        password: req.body.password,
        areaOfInterest:[]
      };
      const request = new users(newUser);
      request.save();
      returnData = {
        result: "success",
        userId: currentUserId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
      };
    }
    // increment id for unique userIds
      currentUserId++;
      return res.json(returnData);
    }
  } catch (error) {
    console.error("Error in processing request:", error);
    return res.status(500).json({ result: "error", reason: "Internal server error" });
  }
})

module.exports = router;