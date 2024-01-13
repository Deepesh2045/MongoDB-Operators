use("firstDatabase");

//? Update
//? update Document single or multiple
// db.friends.find();

//? $set
// db.friends.updateOne(
//   { name: "Deepesh" },
//   {
//     $set: {
//       age: 35,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Deepesh" },
//   {
//     $set: {
//       name: "Ayushman",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Unique" },
//   {
//     $set: {
//       name: "Prakash Shrestha",
//       age: 40,
//       isGraduated: true,
//     },
//   }
// );

//? $inc
// used to increase or decrease value
// db.friends.updateOne(
//   { name: "Nischal" },
//   {
//     $inc: {
//       age: 3,
//     },
//   }
// );
// db.friends.updateMany(
//   {},
//   {
//     $inc: {
//       age: 5,  //! if want decrease age value do -5
//     },
//   }
// );

//? $mul => Multiply
// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $mul: {
//       age: 3,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $mul: {
//       age: 0.5,
//     },
//   }
// );

//? $rename=> Renames field
// db.friends.updateMany(
//   {},
//   {
//     $rename: {
//       age: "totalAge",
//     },
//   }
// );

//? $unset=> remove field
// db.friends.updateMany(
//   {},
//   {
//     $unset: {
//       contactNumber: "",
//     },
//   }
// );
