use("firstDatabase");
// db.newMovies.find();
// let page = 1;
// let limit = 5;

//? $skip, $limit
//? first $skip and second $limit

// db.newMovies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       "rating.average": -1,
//     },
//   },
//   {
//     $skip: (page - 1) * limit,
//   },
//   {
//     $limit: limit,
//   },
//   {
//     $project: {
//       name: 1,
//       id: 1,
//       url: 1,
//       rating: "$rating.average",
//       _id: 0,
//     },
//   },
// ]);
//---------------------------------------------------------------------
let page = 1;
let limit = 10;

db.newMovies.aggregate([
  { $match: {} },
  {
    $sort: {
      "rating.average": -1,
    },
  },
  {
    $skip: (page - 1) * limit,
  },
  {
    $limit: limit,
  },
  {
    $project: {
      name: 1,
      url: 1,
      id: 1,
      _id: 0,
      rating: "$rating.average",
    },
  },
]);
