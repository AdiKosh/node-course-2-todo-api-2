let mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://adikosh:142688cc@ds111012.mlab.com:11012/node-todo-api" ||
    "mongodb://localhost:27017/TodoApp"
);

module.exports = { mongoose };
