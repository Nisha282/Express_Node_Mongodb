const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
// return promise 
mongoose.connect(
    "mongodb+srv://functionup-cohort:Vrvn1212@cluster0.jn5ja3l.mongodb.net/student_management?retryWrites=true&w=majority",
    {   
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('Connection Successfully established with MongoDB');
}).catch((err)=>{
    console.log(err.message);
});