var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel');
const save = require('../models/updateModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { use } = require('.');
dotenv.config();

router.get('/',(req,res)=>{
  res.send('ToDoList backend service');
})

/*--------------------------USER REGISTER---------------------------------------------------------------------------*/
router.post('/register', async function (req, res, next) {
  console.log('request to /register initaited....');
  mongoose.connect(process.env.MDB_CONNECT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log(err);
      console.log('connected to db');
    }
  )
  try {
    const { userName, passwordHash, confirmPasswordHash } = req.body;

    console.log(userName + passwordHash + passwordHash);
    if (!userName || !passwordHash || !confirmPasswordHash)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      console.log('users already exists');
      return res.status(401)
        .json({
          errorMessage: "User already exists! try another name.",
        });
    }

    if (passwordHash.length < 6) {
      console.log('Please enter a password of at least 6 characters');
      return res.status(400)
        .json({
          errorMessage: "Please enter a password of at least 6 characters.",
        });
    }

    if (passwordHash !== confirmPasswordHash) {
      console.log('Please enter the same password twice.')
      return res.status(400)
        .json({
          errorMessage: "Please enter the same password twice.",
        });
    }

    const todo = {};
    const doing = {};
    const done = {}

    const newUser = new User({
      userName, passwordHash
    });

    const saved = await newUser.save();
    console.log("user added to db" + saved);
    const token = jwt.sign(
      {
        user: saved._id,
      },
      process.env.JWT_SECRET'
    );


    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,

      })
      .send(newUser);

  } catch (err) {
    console.error(err);
    res.status(500).send();
  }



});


/*--------------------------USER lOGIN---------------------------------------------------------------------------*/

router.post('/login', async function (req, res, next) {
  console.log('request to /login initaited....');
  mongoose.connect(process.env.MDB_CONNECT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log(err);
      console.log('connected to db');
    }
  )
  try {
    const { userName, passwordHash } = req.body;
    console.log('userName:' + userName);
    console.log('password:' + passwordHash);
    if (!userName || !passwordHash) {
      console.log('all fields required');
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    }

    if (passwordHash.length < 6) {
      console.log('password length atleast 6');
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 characters.",
      });
    }

    const existingUser = await User.findOne({ userName });
    {

      if (!existingUser || existingUser.passwordHash !== passwordHash) {
        console.log('invalid credentails');
        return res.status(401).json({
          errorMessage: 'Username or password incorrect'
        });
      }
    }

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      'process.env.JWT_SECRET'
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
    }).status(200).send(existingUser);
    // res.send(existingUser);
    console.log("user logged in!");
  }
  catch (err) {
    console.error(err);
    res.status(500).send();
  }
});


router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
    console.log('user is currently loggedin with token:' + token);
  } catch (err) {
    res.json(false);
  }
});

router.put("/save", async function (req, res) {
  console.log('request to save initalied...');
  mongoose.connect(process.env.MDB_CONNECT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log(err);
      console.log('connected to db');
    }
  )
  try {
    // const token = req.cookies.token;
    // if (!token) return res.json(false);

    // jwt.verify(token, process.env.JWT_SECRET);
    const { userName, todo, doing, done } = req.body;
    console.log(userName + todo);

    const existingUser = await User.findOneAndUpdate({ userName: userName }, { $set: { todo, doing, done } }, { useFindAndModify: false }, async function (err, res) {
      try {
        if (err)
          console.log(err)
        else {
          console.log('updated');
        }
      }
      catch (err) {
        console.log(err)
      }
    })



    res.status(200).send("updated!");

  } catch (err) {
    res.json(false);
    console.log()
  }
});

module.exports = router;
