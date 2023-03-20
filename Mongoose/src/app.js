const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
// connction creation and create a new db
// Return promise object
mongoose
  .connect(
    "mongodb+srv://functionup-cohort:Vrvn1212@cluster0.jn5ja3l.mongodb.net/mongoDbPractice?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected on 3000"))
  .catch((err) => console.log(err));

// Schema :-
// A Mongoose Schema defines the structure of the document,
// default values ,validators ,etc.

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Mongoose model :-
// A mongoose model is a wrapper on the Mongoose schema.
// A mongooes schema defines the structure of the document,
// default values , validator,etc,whereas a mongoose model
// provides an interface to the database for creating,
// querying,updating,deleting records,etc.

// Create a new mongoose model
// collection creation
// Should be in pascal convesion
// Pascal convesion:-Start with capital letter i.e.Playlist
const playlist = new mongoose.model("Playlist", playlistSchema);
// (collectionName,schemaName)

// create document or insert a new document

// Insert single record
// const createDocument = async ()=>{
//     try {
//         const reactPlaylist = new playlist(
//             {
//                 name: "React js",
//                 ctype: "Frontend",
//                 videos: 300,
//                 author: "Nisha",
//                 active: true,
//             }
//         )

//         // save() return promise
//         const result = await reactPlaylist.save()
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// createDocument()

// // Insert multiple Record Using Mongoose
// const createMultipleDocument = async ()=>{
//     try {
//         const mongodbPlaylist = new playlist(
//             {
//                 name: "MongoDb",
//                 ctype: "Database",
//                 videos: 100,
//                 author: "Nisha",
//                 active: true,
//             }
//         )
//         const bootstrapPlaylist = new playlist(
//             {
//                 name: "Bootstrap",
//                 ctype: "Framework",
//                 videos: 70,
//                 author: "Chanchal",
//                 active: true,
//             }
//         )
//         const expressPlaylist = new playlist(
//             {
//                 name: "Express",
//                 ctype: "Framework",
//                 videos: 80,
//                 author: "Nishh",
//                 active: true,
//             }
//         )
//         const sqlPlaylist = new playlist(
//             {
//                 name: "Sql",
//                 ctype: "Database",
//                 videos: 50,
//                 author: "Nisha",
//                 active: true,
//             }
//         )

//         // collection name
//         const result = await playlist.insertMany([mongodbPlaylist,bootstrapPlaylist,expressPlaylist,sqlPlaylist])
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// createMultipleDocument()

// How to read data

// const readData = async () =>{
//     try {
//        const result=  await playlist.find()
//        console.log(result);

//        const Frontend = await playlist.find({ctype: "Framework"}).select({name:1,_id:0})
//        console.log(Frontend);
//     } catch (error) {
//         console.log(error);
//     }
// }
// readData()

// Comparision query operators ($eq,$gt,$gte,$lt,$lte,$ne,$nin,$in)
// 1.$eq:- Matches values that are equal to a specified value.
// 2.$gt:-Matches values that are greater than a specified value.
// 3.$gte:-Matches values that are greater than or equal to a specified value.
// 4.$in:- Matches any of the values specified in an array.
// 5.$lt:-Matches values that are less than a specified value.
// 6.$lte:-Matches values that are less than or equal to a specified value.
// 7.$ne:-Matches all values that are not equal to a specified value.
// 8.$nin :-Matches none of the values specified in an array.

// const comparisionOperator = async () => {
//   try {
            // const result = await playlist
            // .find({videos:{$gt:40}})
            // .select({name:1,_id:0})
            // console.log(result);


    //         // benifit of $in we can add multiple conditions to the.
    //         // $in :- Matches any of the value specified in an array.
            // const ctype = await playlist
            // .find({ctype : {$in:["Framework" ,"Database"]}})
            // .select({name:1,_id:0})
            // console.log(ctype)



    //         // $nin :- Matches none of the values specified in an array.
            // const nin = await playlist
            // .find({ctype : {$nin:["Framework" ,"Database"]}})
            // .select({name:1,_id:0})
            // console.log(nin);
//   } catch (error) {
//     console.log(error);
//   }
// };

// comparisionOperator();

// Logical operator($and ,$not,$nor,$or)
// 1.$and:-Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
// 2.$not:-Inverts the effect of a query expression and returns documents that do not match the query expression.
// 3.$nor:-Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
// 4.$or:-Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

// $or:- The $or operator performs a logical OR operation on an array of one or more <expressions> and selects the documents that satisfy at least one of the <expressions>.

// Syntax:-
// { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }
// const or = async () =>{
//     try {
//        const result = await playlist
//        .find({$or:[{ctype:"Backend"},{author:"Nisha"}]})
//        .select({name:1 , _id:0})

//        console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// or()

// $and :- $and performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions.
// Syntax :- { $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }

// const and = async () =>{
//     try {
//        const result = await playlist
//        .find({$and:[{ctype:"Database"},{author:"Chanchal"}]})
//        .select({name:1 , _id:0})

//        console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// and()

// 3. $not :- $not performs a logical NOT operation on the specified <operator-expression> and
// selects the documents that do not match the <operator-expression>.
// This includes documents  that do not contain the field.

// Syntax: { field: { $not: { <operator-expression> } } }

// Example:- db.inventory.find( { price: { $not: { $gt: 1.99 } } } )

// const not = async () => {
//     const findResult = await playlist.find({ videos: { $not: { $gt: 60 } } })
//         .select({ name: 1 })
//         .limit();
//       console.log(findResult);
//     };
//     not()

// 4.$nor:- $nor performs a logical NOR operation on an array of one or more query expression and
// selects the documents that fail all the query expressions in the array.

// Syntax :- { $nor: [ { <expression1> }, { <expression2> }, ...  { <expressionN> } ] }

// Example :- db.inventory.find( { $nor: [ { price: 1.99 }, { sale: true } ]  } )

// const nor = async () => {
//     const result = await playlist.find({$nor:[{videos:{$gt:50}}, {ctype:'Frontend'}]})
//     console.log(result);
//     };
//     nor();

// Find output as count
// const count = async () => {
// try {
//    const result = await playlist.find({$and:[{ctype:"Database"},{author:"Chanchal"}]}).select({name:1}).countDocuments()
//    console.log(result);
// } catch (error) {
//     console.log(error);
// }
// }
// count()

// Sorting
// const sort = async () => {
//     try {
//        const result = await playlist.find({$and:[{author:"Chanchal"}]}).select({name:1}).sort()
//        console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
//     }
//     sort()

// Asending order:- 1 for asending order, -1 for desending order
// const AsendingSort = async () => {
//     try {
//        const result = await playlist.find({$and:[{author:"Chanchal"}]}).select({name:1}).sort({ctype:1})
//     // also use sort as ================================================================.sort("ctype : 1")
//     // count() deprecated by countdocument()
//        console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
//     }
//     AsendingSort()

// ====================================UPDATES =============================================================
// Update data using mongoose?
// update is deprecated so use updateOne,updateMany,findOneAndUpdate,findAndModify, findByIdAndUpdate.
// const update = async(id)=>{
//     try {
//         const result = await playlist.updateOne({_id:id}, {$set:{name:"Javascript"}})
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// update("63d397b0082859a45c6b314c")

// 63d397b0082859a45c6b314c

// Update by id
// const updateById = async(id)=>{
//     try {
//         const result = await playlist.findByIdAndUpdate({_id:id}, {
//             $set:{name:"Javascript By meerab"}
//         },
//         {new:true})
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// updateById("63d397b0082859a45c6b314c")

// ====================================DELETE =================================================

// const deleteOne = async(id)=>{
//         try {
//             const result = await playlist.deleteOne({_id:id},{new:true})
//             console.log(result);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     deleteOne("63d2e417f9a7ba5133bee942")

// deleteById
// const deleteById = async(id)=>{
//         try {
//             const result = await playlist.findByIdAndDelete({_id:id},{new:true})
//             console.log(result);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     deleteById("63d2e417f9a7ba5133bee941")
