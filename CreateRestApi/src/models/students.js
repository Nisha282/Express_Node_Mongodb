const mongoose = require('mongoose');
const validator = require('validator');
// const { default: isEmail } = require('validator/lib/isEmail');

const studentSchma = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name is required"],
        minlength: 3
    },
    email: {
        type: String,
        required: [true,"email is required"],
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid.Please enter valid mail id!');
            }
        }
    },
    phone:{
        type: String,
        required: [true,"Phone number required"],
        minlength:[10,"phone number contain 10 digits"],
        maxlength:[10,"phone number contain 10 digits"],
        unique: true,
        validate(value){
            if(!validator.isMobilePhone(value)) {
                throw new Error('Phone is not valid.Please enter valid format!')
            }
        }
    },
    address:{
        type:String,
        required:true
    }
})

// we will  create a new collection 

const Student = new mongoose.model('Student',studentSchma)

module.exports = Student
