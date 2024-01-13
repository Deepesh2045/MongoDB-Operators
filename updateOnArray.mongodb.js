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
db.friends.updateOne({_id:ObjectId("656070d2b16daaa31169a51a")},{
    $push:{
        hobbies:{$each:["Singing","Coding","Dancing"]}
    }
})

db.friends.find();


// db.friends.updateOne({_id:Objectd ("656070d2b16daaa31169a51a") }
// )
