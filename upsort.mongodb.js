use("firstDatabase");

// db.laptops.insertOne({
//   name: "HP Bang and Olufsen",
//   brand: "HP",
//   ram: 16,
//   ssd: 256,
// });

//? upsert=> update or insert
// db.laptops.updateOne(
//   { name: "Vector" },
//   {
//     $set: {
//       brand: "Asus",
//       ram: 16,
//       ssd: 512,
//     },
//   },
//   { upsert: true }
// );
db.laptops.find();
