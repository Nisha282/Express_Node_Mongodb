const studentModel = require('../models/students')

const createStudent = async (req, res) => {
    try {
        const data = req.body;
        if (Object.keys(data).length == 0)
            return res
                .status(400)
                .send({ status: false, message: "please give some data" });
        let { name, email, phone, address } = data;
        const result = await studentModel.create(data)
        // Http Status Code :-
        // HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

        // Informational responses (100 – 199)
        // Successful responses (200 – 299)
        // Redirection messages (300 – 399)
        // Client error responses (400 – 499)
        // Server error responses (500 – 599)

        res.status(201).send({ data: result, message: 'Student created successfully' });
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getStudent = async (req,res) =>{
    try {
        const data = await studentModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const getStudentById = async (req,res) =>{
    try {
        const _id = req.params.id 
        const result = await studentModel.findById(_id)
        if(!result) res.status(404).send({ message: 'student id is invalid' })
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// Update student by its id
const updateStudentbyPatch = async (req,res) =>{
    try {
        const id = req.params.id 
        console.log(id);
        let result = await studentModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send({data:result,message:"Data updated"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const deleteStudent = async (req,res) =>{
    try {
       const _id = req.params.id
       if(!_id) res.status(404).send({ message: 'Please provide student id'})
       const result = await studentModel.findByIdAndDelete(_id)
       if(!result) res.status(400).send({message:"Student already deleted"})
       res.status(200).send({data: result,message:"Student deletes"}) 
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { createStudent ,getStudent,getStudentById,deleteStudent,updateStudentbyPatch}