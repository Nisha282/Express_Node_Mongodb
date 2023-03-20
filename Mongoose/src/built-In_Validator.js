// Built-In Validation 
// For more detail about validations are:- https://mongoosejs.com/docs/validation.html
// npm validator :- https://www.npmjs.com/package/validator

const mongoose = require("mongoose");
const Validator = require("validator");

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

const youtubeSchema = new mongoose.Schema({
    // Built-in validation 
    channel: {
        type: String,
        require: true,
        unique: true,
        lowercase: [String, 'channel should be in lowercase'],
        trim: true
    },
    content: {
        type: String,
        require: true,
        enum: ['coding', 'comedy', 'poetry', 'Rosting'],
        lowercase: true
    },
    // custom validation
    videos: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error(`Videos count should not be negative`)
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!Validator.isEmail(value)) {
                throw new Error(`Email is invalid`)
            }
        }
    },
    youtuber: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const youtube = new mongoose.model("NewYoutube", youtubeSchema);

const createDocument = async () => {
    try {
        const carryMinati = new youtube(
            {
                channel: "CarryMinati",
                content: "Rosting",
                videos: 200,
                youtuber: "Ajay Nagar",
                active: true
            }
        )
        const technicalTapa = new youtube(
            {
                channel: "Technical thapa",
                content: "Coding Video",
                videos: 300,
                youtuber: "Vinode bahadur Thapa",
                active: true
            }
        )
        const bbkVines = new youtube(
            {
                channel: "bbkVines",
                content: "Comedy",
                videos: 500,
                youtuber: "bhuvan ",
                active: true
            }
        )
        const ashish = new youtube(
            {
                channel: "ashish Chanchlani",
                content: "Comedy",
                videos: 600,
                youtuber: "ashish Chanchlani",
                active: true
            }
        )
        const result = await youtube.insertMany([carryMinati, ashish, bbkVines, technicalTapa])
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

  createDocument()

const createData = async () => {
    try {
        const data = new youtube({
            channel: "chut",
            content: "coding",
            videos: 5,
            email: "bhee@gmail.com",
            youtuber: "code step by step",
            active: true
        })
        const result = await youtube.create(data)
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// createData()