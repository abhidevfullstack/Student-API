// import mongoose from "mongoose";
// import { MONGO_CONNECTION_URL } from "../constants/DbConstants.js";

// export async function connectDatabase(){
//     try {
//         await mongoose.connect(MONGO_CONNECTION_URL);
//         console.log('Db Connected !')
//     } catch (error) {
//         console.log('ERROR in db connection',error)
//     }
    
// }
import { createConnection } from "mysql";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "../constants/DbConstants.js";

export const connection = createConnection(
    {
        host:DB_HOST,
        user:DB_USER,
        password:DB_PASSWORD,
        database:DB_NAME
    }
);