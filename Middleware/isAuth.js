const jwt=require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const individual = require('../Models/IndividualAuth');
const ACCESS = process.env.SUPERSECRET;
module.exports=(req,res,next)=>{

    const {authorization}=req.headers
    console.log(authorization);
    if(!authorization){
        return res.status(401).json({error:"you must be logged in"})
    }
    
    const token=authorization.replace("Bearer ","");

    console.log(authorization);

    jwt.verify(token,ACCESS,(err,payload)=>{

        if(err){
            return res.status(401).json(err)
        }

        const {id,email,name}=payload
        // console.log(id);
        // console.log(email);
        User.findOne({
            where:{
                id:id
            }
        })
        .then(userdata=>{
            //console.log(userdata);
            req.user=userdata;
            next();
        })
        
    })
    
}