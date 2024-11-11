import express from "express";
import { addFaculty } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

adminRouter.post("/add-faculty", upload.single("image"), addFaculty);

export default adminRouter;
