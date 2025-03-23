import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
    const { name, class: studentClass, batchYear, gender } = req.body;
    try {
        const newStudent = new Student({ name, class: studentClass, batchYear, gender });
        await newStudent.save();
        res.json(newStudent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Student deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
