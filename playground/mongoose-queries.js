const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

let id = "5b642e446d14748809f97fba";
let userId = "5b641037c676c35c3d195e22";

if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
}

if (!ObjectID.isValid(userId)) {
  console.log("User ID not valid");
}

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found");
//     }
//     console.log("Todo By Id", todo);
//   })
//   .catch(e => console.log(e));

User.findById(userId).then(
  user => {
    if (!user) {
      return console.log("User not found");
    }
    console.log(JSON.stringify(user, undefined, 2));
  },
  e => {
    console.log(e);
  }
);
