const express = require('express');
const router = express.Router();
const users = require('../../Users');
let currentUserId = 6;

/**
 * @route GET api/user/
 * @desc Retrives the user's role
 **/
router.get('/:id', (req, res) => {
  try {
    const userFound = users.find((user) => {
      if (user.email === req.body.email && user.password === req.body.password) {
        return res.json(user)
      } else {
        return res.json({role: "null"});
      }
    });
    return userFound;
  } catch {
    return res.status(500).json({ result: "error", reason: "Internal server error" });
  }
});
/**
 * @route POST api/jobs/
 * @desc Creates a new user
 **/
router.post('/', (req,res) => {
  // if (req.body.taskName === "" || !req.body.taskName) {
  //   return res.status(400).json({msg: "Bad request: task name cannot be empty of null"});
  // }
  try {
    const newUser = {
      clientId: currentUserId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
    };
    users.push(newUser);
    currentUserId++;
    return res.json({result: "success"});
  } catch {
    return res.status(500).json({ result: "error", reason: "Internal server error" });
  }
})

module.exports = router;