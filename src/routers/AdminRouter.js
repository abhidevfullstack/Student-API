import express from "express";
import { adminLogin, registerAdmin } from "../controllers/AdminController.js";

const adminRouter = express.Router();

adminRouter.post('/',registerAdmin);
adminRouter.post('/login',adminLogin);

export default adminRouter;