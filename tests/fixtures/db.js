const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../../src/models/user");
const Task = require("../../src/models/task");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "Mike",
  email: "mikeone@gmail.com",
  password: "L14i$7nlsr313",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.TOKEN_SECRET),
    },
  ],
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  name: "Alan",
  email: "malanone@gmail.com",
  password: "Myfamil13#4",
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.TOKEN_SECRET),
    },
  ],
};

const taskOne = {
  _id: mongoose.Types.ObjectId(),
  description: "First task",
  completed: false,
  owner: userOne._id,
};
const taskTwo = {
  _id: mongoose.Types.ObjectId(),
  description: "Second task",
  completed: true,
  owner: userOne._id,
};
const taskThree = {
  _id: mongoose.Types.ObjectId(),
  description: "Third task",
  completed: false,
  owner: userTwo._id,
};
const setUpDatabase = async () => {
  await User.deleteMany({});
  await Task.deleteMany({});
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  userOne,
  userTwo,
  userOneId,
  taskOne,
  taskTwo,
  taskThree,
  setUpDatabase,
};
