const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

Todo.findOneAndRemove({ _id: "5b6548714a88e96ed2930918" }).then(doc => {});

Todo.findByIdAndRemove("5b6548714a88e96ed2930918").then(todo => {
  console.log(todo);
});
