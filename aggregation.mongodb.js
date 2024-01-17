use("firstDatabase");

//! Aggregation Operations
//------------------------
//? Powerful Query tool
//? uses pipeline
//? popular stages are: $match, $sort, $limit, $skip, $project, $lookup, $group

//? $match and $project
// db.newMovies.aggregate([
//   {
//     $match: {
//       name: "Under the Dome",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);

//? $sort=> it is used for sorting
//? 1 => Ascending Sort (small to Big)
//? -1 => descending Sort (Big to small)

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
//     $project: {
//         movieName: "$name",
//     //   name: 1,
//     //   rating: 1,
//       movieRating: "$rating.average"
//     },
//   },
// ]);

//? hieraracy => small to big (numbers, capital letter, small letter)
// db.newMovies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $project: {
//       movieName: { $toLower: "$name" },

//     },
//   },
//   {
//     $sort: {
//       movieName: -1,
//     },
//   },
// ]);

db.newMovies.aggregate([
  {
    $match: {
      genres: { $all: ["Action", "Thriller"] },
    },
  },
  {
    $project: {
      movieName: { $toLower: "$name" },
      genres: 1,
    },
  },
  {
    $sort: {
      movieName: -1,
    },
  },
]);
