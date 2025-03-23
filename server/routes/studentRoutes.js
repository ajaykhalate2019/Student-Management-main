import express from "express";
import { createStudent, getStudents, getStudentById, deleteStudent } from "../controllers/studentController.js";

const router = express.Router();

router.post("/student", createStudent);
router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.delete("/students/:id", deleteStudent);

export default router;