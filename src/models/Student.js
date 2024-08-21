import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
    roll:{type:Number,unique:true},
    name:String,
    marks:Number,
    phone:String
});

export const Student = mongoose.model('student',studentSchema);
