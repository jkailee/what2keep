const express = require('express');

const app = express();
// const port = 5001;
// const user_change = require("./user_services");

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

async function testing() {
  return true;
}

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// app.get("/users", async (req, res) => {
//   const name = req.query.name;
//   const job = req.query.job;
//   if (name != undefined && job != undefined) {
//     let result = await user_change.findUserByNameAndJob(name, job);
//     //result = { users_list: result };
//     res.send(result);
//   } else if (name != undefined) {
//     //...users/?name=__
//     let result = await user_change.findUserByName(name);
//     res.send(result);
//   } else if (job != undefined) {
//     let result = await user_change.findUserByJob(job);
//     res.send(result);
//   } else {
//     //get all users
//     let result = await user_change.getUsers(undefined, undefined);
//     //console.log(JSON.stringify(result));
//     res.send(result);
//   }
//   res.status(200).end(); //always sending something
// });

// app.get("/users/:id", async (req, res) => {
//   const id = req.params["id"]; //or req.params.id
//   let result = await user_change.findUserById(id);
//   if (result === undefined || result.length == 0)
//     res.status(404).send("Resource not found.");
//   else {
//     res.send(result);
//     res.status(200).end();
//   }
// });

// app.post("/users", async (req, res) => {
//   const userToAdd = req.body;
//   // userToAdd.id = idGenerator();
//   // addUser(userToAdd);
//   let result = await user_change.addUser(userToAdd); //send back user WITH ID
//   //console.log("user sent back at post: " + JSON.stringify(result));
//   res.status(201).send(result).end();
// });

// // implement to delete a user by id
// // first see if that id exists and if it does remove it
// app.delete("/users/:id", async (req, res) => {
//   const id = req.params["id"];
//   const check = await user_change.findUserById(id);
//   if (check !== undefined && check.length != 0) {
//     user_change.deleteUserById(id);
//     res.status(204).end();
//   } else {
//     res.status(404).end();
//   }
// });

exports.testing = testing;
