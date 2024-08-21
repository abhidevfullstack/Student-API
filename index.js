import express from "express";
import { connection } from "./src/utility/DbUtil.js";
import studentRouter from "./src/routers/StudentRouter.js";
import adminRouter from "./src/routers/AdminRouter.js";
// import {connectDatabase} from './src/utility/DbUtil.js';
import cors from 'cors';

const PORT = 6800;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/students",studentRouter);
app.use("/admins",adminRouter);

app.listen(PORT,()=>{
    // connectDatabase();
    connection.connect((error)=>{
        if (error) {
            console.log("ERROR IN DB CONNECTION !");
            consonle.log(error);
        }
        else{
            console.log("Db Connected");
        }
    });
    console.log(`Server is running on port ${PORT}`);
});