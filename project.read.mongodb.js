use("firstDatabase");
// db.projectReadOp.find()

// ?READ OPERATIONS:

//? Find movies whose status is "Ended"
// db.projectReadOp.find({name: {$eq:"Under the Dome"}})
// db.projectReadOp.find({status:{$eq:"Ended"}}).count();
// db.projectReadOp.find({status:{$eq:"Ended"}});

//? find movies whose rating is 9
// db.projectReadOp.find({ "rating.average": { $eq: 9 } });

// ?find movies whose rating is greater than 7 and less than 9
// db.projectReadOp.find({
//     $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
//   },{name:1,rating:1,});

// ?find movies whose genres is Thriller
// db.projectReadOp.find({ genres: { $eq: "Thriller" } });

// ?find movies whose status is Running
// db.projectReadOp.find({status:{$eq: "Running"}})

//? find movies whose status is Ended and runtime is 60
// db.projectReadOp.find({ $and: [{ status: "Ended" }, { runtime: 60 }] });
// Shortcut:
// db.projectReadOp.find({ status: "Ended", runtime: 60 });

// ?find movies whose weight is 75 and network country is Canada
// db.projectReadOp.find({ $and: [{ weight: 75 }, { "network.country.name": "Canada" }] });

// ?find movies whose weight is 96 or runtime is 60
// db.projectReadOp.find({ $or: [{ weight:96 }, { runtime: 60 }] });
// db.projectReadOp.find();
// ? find movies whose rating average is not 9
// db.projectReadOp.find({ "rating.average": { $ne: 9 } }, { name: 1, rating: 1 });

// ? find movies whose rating average is either 6 or 6.5 or 9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8
// db.projectReadOp.find(
//   {
//     $or: [
//       { "rating.average": 6 },
//       { "rating.average": 6.5 },
//       { "rating.average": 9 },
//       { "rating.average": 8 },
//       { "rating.average": 8.5 },
//       { "rating.average": 8.6 },
//       { "rating.average": 7.7 },
//       { "rating.average": 6.1 },
//       { "rating.average": 7.8 },
//     ],
//   },
//   { name: 1, rating: 1 }
// );

//---------------------------------------------------------------------------

//? $in
//? Alternate of $or
// db.projectReadOp.find({"rating.average":{$in:[6,6.5,9,8,8.5,8.6,7.7,3.1,7.8]}})

//? $nin
//? Alternate of $nor
// db.projectReadOp.find({"rating.average":{$nin:[6,6.5,9,8,8.5,8.6,7.7,3.1,7.8]}})

//===========================================================================

//? array
//? $all, $elemMatch, $size
//find movies whose genres is both Drama and Thriller
// db.projectReadOp.find({$and:[{genres: "Drama"},{genres:"Thriller"}]})

//? $all
//? Alternate of $and same field in array
// db.projectReadOp.find({genres:{$all:["Thriller", "Drama"]}})

// db.newStudent.find({});
// db.newStudent.find({hobbies:{$all:["Dancing", "Singing"]}})

//? $elemMatch=> In array match single element all condition
// db.newStudent.find({
//   scores: { $elemMatch: { sub: "Math", point: { $gt: 70 } } },
// });

// db.scores.insertMany([
//   { results: [ 82, 85, 88 ] },
// { results: [ 75, 88, 89 ] }
// ])
db.scores.find({ results: { $elemMatch: { $gt: 80, $lt: 85 } } });
