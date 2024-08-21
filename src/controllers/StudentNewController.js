import { Student } from "../models/Student.js";

export async function fetchStudents(req,res){
    try {
        const students = await Student.find();
        res.send(students);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:'Something went wrong'});
    }
}

export async function saveStudent(req,res){
    try {
        const studentData = req.body;
        const std = new Student(studentData);
        await std.save();
        res.status(200).send({message:'Student Registered'});
    } catch (error) {
        console.log(error);
        res.status(500).send({message:'Something went wrong'});
    }
}