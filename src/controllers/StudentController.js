
import { STUDENT_TABLE_NAME } from "../constants/DbConstants.js";
import { connection } from "../utility/DbUtil.js";

export const fetchStudents = (req,res)=>{
    const qry=`select * from ${STUDENT_TABLE_NAME}`;
    connection.query(qry,(error,results)=>{
        if (error) {
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            res.status(200).send(results);
        }
    });
}

export const saveStudent = (req,res)=>{
    const {id,name,marks,phone} = req.body; // {id:105,name:'',phone:'',marks:55}
    const qry = `insert into ${STUDENT_TABLE_NAME} values(${id},'${name}',${marks},'${phone}')`
    connection.query(qry,(error,result)=>{
        if (error) {
            console.log(error);
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            console.log(result);
            setTimeout(()=>{
                res.status(200).send({message:'Student Inserted'});
            },1500);
            
        }
    });
}

export const fetchStudentById = (req,res)=>{
    const qry = `select * from ${STUDENT_TABLE_NAME} where id=${req.params.id}`;
    connection.query(qry,(error,result)=>{
        if (error) {
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            if (result.length == 0) {
                res.status(404).send({message:'Student not found'});
            }
            else{
                res.status(200).send(result[0]);
            }
            
        }
    });
}

export const removeStudent = (req,res) => {
    const qry = `delete from ${STUDENT_TABLE_NAME} where id=${req.params.id}`;
    connection.query(qry,(error,result)=>{
        if(error){
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            res.status(200).send({message:'Student removed !'});
        }
    });
}

export const updateStudent = (req,res) => {
    const {name,marks,phone} = req.body;
    const qry = `update ${STUDENT_TABLE_NAME} set name='${name}', marks='${marks}', phone='${phone}' where id=${req.params.id}`
    connection.query(qry,(error,result)=>{
        if(error){
            res.status(500).send({message:'Something went wrong'});
        }
        else{
            res.status(200).send({message:'Student updated !'});
        }
    });
}

// CRUD Create, Read, Update, Delete