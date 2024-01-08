use("firstDatabase");

//? insertOne=> add one document
// db.product.insertOne({
//   name: "Shoes Cleaner",
//   price: 350,
//   quantity: 5,
// });

//? insertMany:
// db.product.insertMany([
//   {
//     name: "Gucci Sunglass Black",
//     price: 30000,
//     quantity: 3,
//   },
//   {
//     name: "Sports T-Shirt",
//     price: 2000,
//     quantity: 8,
//   },
//   {
//     name: "cotton Bed Sheet",
//     price: 5000,
//     quantity: 6,
//   },
//   {
//     name: "Wireless Laptop Keyboard",
//     price: 50000,
//     quantity: 10,
//   },
// ]);

//? FindOne
// db.product.find()
// db.product.findOne()
// db.product.findOne({name: "Wireless Mouse"})

//? Delete
// DeleteOne, DeleteMany
// db.product.deleteOne({quantity: 5})
// db.product.deleteMany({});

// //? Update
// ? updateOne, UpdateMany
// db.product.updateOne(
//   { name: "cotton Bed Sheet" },
//   {
//     $set: { price: 3500, quantity: 10 },
//   }
// );

// db.product.updateMany(
//   { quantity: 10 },
//   {
//     $set: { price: 35000 },
//   }
// );
// db.product.find();
