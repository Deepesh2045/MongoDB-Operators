use("firstDatabase");

// db.friends.find();

//? array update
//? $push, $pop, $pull, $pullAll, $addToSet

//? $push
// db.friends.updateOne(
//   { name: "Ayushman" },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );

//? modifier => $each, $position, $sort, $slice
//? $each
// db.friends.updateOne(
//   { _id: ObjectId("656070d2b16daaa31169a51a") },
//   {
//     $push: {
//       hobbies: { $each: ["Singing", "Coding", "Dancing"] },
//     },
//   }
// );

// db.friends.updateOne({_id:ObjectId ("656070d2b16daaa31169a51a") }
// )
// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $push: {
//       hobbies: { $each: ["Driving", "Singing"] },
//     },
//   }
// );

//? $addToSet
// Adds elements to an array only if they do not already exist in the array
// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Cycling", "Hiking"] },
//     },
//   }
// );

//? $Pop
//? 1=> removes last element from array
//? -1=> removes first element from array

// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $pop: {
//       hobbies: 1,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $pop: {
//       hobbies: -1,
//     },
//   }
// );

//? $pull
//? removes item from array based upon condition
// db.friends.updateOne({name: "Prakash"},{
//   $pull:{
//     scores:{sub: "Social"}
//   }
// })
// db.friends.updateOne(
//   { name: "Ayushman" },
//   {
//     $pull: {
//       scores: { sub: "Math", point: { $gte: 50 } },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Ayushman" },
//   {
//     $pull: {
//       hobbies: "Singing"
//     },
//   }
// );

//? $pullAll
// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $pullAll: {
//       hobbies: ["Singing", "Driving", "Basketball"],
//     },
//   }
// );

//=======================================================================
//? $
//? update Science score of Nischal to 60
// db.friends.updateOne(
//   { name: "Nischal", "scores.sub": "Science" },
//   {
//     $set: {
//       "scores.$.point": 60,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Nischal", hobbies: "Cricket" },
//   {
//     $set: {
//       "hobbies.$": "Cycling",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Prakash Shrestha", "scores.sub": "Science" },
//   {
//     $inc: {
//       "scores.$.point": 10,
//     },
//   }
// );

//? $[]
// db.friends.updateOne(
//   { name: "Prakash Shrestha" },
//   {
//     $set: {
//       "scores.$[].point": 50,
//     },
//   }
// );

// db.friends.find();
