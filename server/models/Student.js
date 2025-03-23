import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    gender: String,
    batchYear: Number
});

const Student = mongoose.model("Student", studentSchema);
export default Student;