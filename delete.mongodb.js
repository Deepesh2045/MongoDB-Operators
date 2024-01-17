use("firstDatabase");
// db.movies.find();
//? delete movies whose summary includes "Pacific"
// db.movies.deleteMany({ summary: { $regex: "Pacific", $options: "i" } });
//? delete movies whose genre includes both Action and Crime
// db.movies.deleteMany({ genres: { $all: ["Action", "Crime"] } });

//? delete movies whose weight is less than 60
db.movies.deleteMany({ weight: { $lt: 60 } });
