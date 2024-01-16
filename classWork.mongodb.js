use("firstDatabase");

//? add football to hobbies array of Sagar
// db.besties.updateOne(
//   { name: "Sagar" },
//   {
//     $push: {
//       hobbies: "Football",
//     },
//   }
// );
//? add badminton and Basketball to Sagar's Hobbies
// db.besties.updateOne(
//   { name: "Sagar" },
//   {
//     $push: {
//       hobbies: { $each: ["Badminton", "Basketball"] },
//     },
//   }
// );
//? add Swimming, Cycling and Cricket as sagar's hobbies
// db.besties.updateOne(
//   { name: "Sagar" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Swimming", "Cycling", "Cricket"] },
//     },
//   }
// );
//? add Swimming and Cycling Prakash's Hobbies
// db.besties.updateOne(
//   { name: "Prakash" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Swimming", "Cycling"] },
//     },
//   }
// );
//? add scores to Prakash {sub: "Nepali", point:"60"}, {sub:"English", point: 72}
// db.besties.updateOne(
//   { name: "Prakash" },
//   {
//     $addToSet: {
//       scores: {
//         $each: [
//           { sub: "Nepali", point: "60" },
//           { sub: "English", point: 72 },
//         ],
//       },
//     },
//   }
// );
//? removes last value and first value of Sagar's hobbies
// db.besties.updateOne(
//   { name: "Sagar" },
//   {
//     $pop: {
//       hobbies: 1,
//     },
//   }
// );
//------------------------------------------------------
// db.besties.updateOne(
//   { name: "Sagar" },
//   {
//     $pop: {
//       hobbies: -1,
//     },
//   }
// );
//? Removes thoes Subject in which Prakash has scores less than 60
// db.besties.updateOne(
//   { name: "Prakash" },
//   {
//     $pull: {
//       scores: { point: { $lt: 60 } },
//     },
//   }
// );
//? Removes Football and Basketball from Sagar's Hobbies
// db.besties.updateOne(
//   { name: "Sagar" },
//   {
//     $pullAll: {
//       hobbies: ["Football", "Basketball"],
//     },
//   }
// );
//? Update Sagar's science score to 63

// db.besties.updateOne(
//   { name: "Sagar", "scores.sub": "Science" },
//   {
//     $set: {
//       "scores.$.point": 63,
//     },
//   }
// );
//? Change "Social" subject to "Health" from Sagar's Document and point 71
// db.besties.updateOne(
//   { name: "Sagar", "scores.sub": "Social" },
//   {
//     $set: {
//       "scores.$.sub": "Health",
//       "scores.$.point": 71,
//     },
//   }
// );
//? Change "Badminton" to "Singing" from Sagar's hobbies
// db.besties.updateOne(
//   { name: "Sagar", hobbies: "Badminton" },
//   {
//     $set: {
//       "hobbies.$": "Singing",
//     },
//   }
// );
//? update Prakash's Score 80 for all Subject
// db.besties.updateOne(
//   { name: "Prakash" },
//   {
//     $set: {
//       "scores.$[].point": 80,
//     },
//   }
// );

db.besties.find();
