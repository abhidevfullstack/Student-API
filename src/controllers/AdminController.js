import {compareSync, hashSync} from 'bcrypt';
import { ADMIN_TABLE_NAME } from '../constants/DbConstants.js';
import { connection } from '../utility/DbUtil.js';
import jwt from 'jsonwebtoken';

export const registerAdmin = (req,res) => {
    const {id,username,password,phone} = req.body;
    // hash is async , hashSync is sync
    const encryptedPassword = hashSync(password,10);
    const qry = `insert into ${ADMIN_TABLE_NAME} values(${id},'${username}','${encryptedPassword}','${phone}')`;
    connection.query(qry,(error,result)=>{
        if (error) {
            res.status(500).send({message:'Something went wrong....!'});
        }
        else{
            res.status(200).send({message:'Admin Registered !'});
        }
    });
}

export const adminLogin = (req,res) => {
    const {username, password} = req.body;
    const qry = `select * from ${ADMIN_TABLE_NAME} where username='${username}'`;
    connection.query(qry,(error,result)=>{
        if (error) {
            res.status(500).send({message:'Something went wrong....!'}); 
        }
        else{
           if (result.length == 0) {
                res.status(400).send({message:'Username not exists'});
           } 
           else{
               const encryptedPassword = result[0].password; 
               if (compareSync(password,encryptedPassword)) {
                    const token = jwt.sign({adminId:result[0].id},'hello1234');
                    res.status(200).send({message:'Login successful',token:token});
               }
               else{
                    res.status(400).send({message:'Invalid password for the mentioned username'});
               }
           }
        }
    });
} 