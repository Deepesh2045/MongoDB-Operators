use("firstDatabase");

//? $lookup
//? one to one
//? one to many
//? many to many

// db.owners.insertMany([
//   {
//     name: "Martin",
//     address: "Finland",
//     age: 28,
//   },
//   {
//     name: "John",
//     address: "United State",
//     age: 32,
//   },
// ]);

// db.owners.find();

// db.vehicles.insertOne(
//   {
//     name: "G300",
//     brand: "BMW",
//     model: 2024,
//     ownerId: ObjectId("65a944e55e3252876dc8d748"),
//   },
// );
// db.vehicles.find();

db.vehicles.aggregate([
  { $match: {} },
  {
    $lookup: {
      from: "owners",
      localField: "ownerId",
      foreignField: "_id",
      as: "ownerDetails",
    },
  },
  {
    $project: {
      name: 1,
      brand: 1,
      model: 1,
      ownerData: {
        name: { $first: "$ownerDetails.name" },
        address: { $first: "$ownerDetails.address" },
      },
    },
  },
]);
