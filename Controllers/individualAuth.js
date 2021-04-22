const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");
const crypto=require('crypto');
const nodemailer = require("nodemailer")
const nodemailersendgrid = require("nodemailer-sendgrid-transport")
const OtpGenerator = require("otp-generator");
//import models
const Individual =  require("../Models/IndividualAuth");
const IndividualOtp = require("../Models/IndividualOtp");

//regex
var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

//sengrid
const transporter = nodemailer.createTransport(nodemailersendgrid({
    auth:{
        api_key: process.env.API_KEY
    }
}))

exports.signup = asyncHandler( async (req,res,next) =>{
    
    const{FirstName,LastName , Email , Password}=req.body;
    //check email validation
    console.log(FirstName,LastName,Email);
    var valid = emailRegex.test(Email);

    if(!valid)
    {
        return res.status(422).json({error: "please enter a valid email"});
    }

    //all details should be mentioned
    if(!Email || !Password || !FirstName || !LastName) {
        
        return res.status(422).json({error:"please enter all the fields"});
    }

    const SavedUser = await Individual.findOne({Email:Email});
    if(!SavedUser)
    {
        const hashedpassword = await bcrypt.hash(Password,12);
        req.body.Password = hashedpassword;
        const NewIndividual = new Individual(req.body);
        await NewIndividual.save();
        let otp = OtpGenerator.generate(4, {
            alphabets: false,
            specialChars: false,
            upperCase: false,
        })
        const optdata = await new IndividualOtp({
            Email : Email,
            Otp : otp
        });
    }
    return res.status(500).json("already exist");
    // Individual.findOne({ Email : Email}).then((savedUser)=>{
    //     if(savedUser)
    //     {
    //         return res.status(422).json({error:"user already registered continue to login"})
    //     }
    //     //password must be hashed
    //     bcrypt.hash(Password,12)
    //     .then(hashedpassword=>{
    //         //new user create instance of individual user model
    //         const individual=new Individual({
    //             Email,
    //             Password:hashedpassword,
    //             FirstName,
    //             LastName,
    //             isVerified:"false" //this will tell if user verfied or not
    //         })
    //         individual.save().then((result)=>{
    //             console.log("indiviual created");
    //         })
    //         .catch((err)=>{
    //             res.status(400).json({ message: "individual User Not Saved", error: err });
    //         })
    //         //generated otp using otp generatror
    //         let otp = OtpGenerator.generate(4, {
    //             alphabets: false,
    //             specialChars: false,
    //             upperCase: false,
    //         })
            
    //         const optdata = new IndividualOtp({
    //             Email : Email,
    //             Otp : otp
    //         })
    //         optdata.save().then((data)=>{
    //             console.log(otp);
    //             console.log("otp created successfully");
    //         })
    //         .catch((err)=>{
    //             res.status(400).json({error: err });
    //         });
    //         //if no error then saved successfully
    //         return transporter.sendMail({
                
    //             from: "sachan.himanshu2001@gmail.com",
    //             to: email,
    //             subject: "signup successful",
    //             html: `<h1>welcome to Chrianjeev to enjoy our feature please verify your email using this otp : ${otp}</h1>`

    //           });
    //     })
    //     .catch(err=>{
    //         res.json(err)
    //     })
    //
    // })
    // .catch(err=>{
    //     res.json(err);
    // });
});