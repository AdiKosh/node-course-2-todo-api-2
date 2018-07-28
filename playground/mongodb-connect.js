//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// destructuring
// let user = { name: "Adi", age: 21 };
// let { name } = user; name = Adi
// console.log(name);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    // (err, client) v3
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    //const db = client.db('TodoApp'); v3

    // db.collection("Todos").insertOne(
    //   {
    //     text: "Something to do",
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert todo", err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // db.collection("Users").insertOne(
    //   {
    //     name: "Amit Kosh",
    //     age: 20,
    //     location: "Israel"
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert user", err);
    //     }
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    //   }
    // );

    db.close();
    //client.close(); v3
  }
);
