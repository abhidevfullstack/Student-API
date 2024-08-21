import jwt from 'jsonwebtoken';

export const verifyToken = (req,res,next) => {
    const header = req.get('Authorization');
    if (header) {
       const token = header.split(" ")[1];
        jwt.verify(token,'hello1234',(error,payload)=>{
            if (error) {
                res.status(401).send({message:'Token is invalid'});
            }
            else{
                next();
            }
        });
    }
    else{
        res.status(401).send({message:'Token is missing'});
    }
}