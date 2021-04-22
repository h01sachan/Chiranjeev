const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");
const crypto=require('crypto');
const nodemailer = require("nodemailer")
const nodemailersendgrid = require("nodemailer-sendgrid-transport")
const OtpGenerator = require("otp-generator");
//import models
const HospitalAuth =  require("../Models/HospitalAuth");
const HospitalOtp = require("../Models/HospitalOtp");
//regex
var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

//sengrid
const transporter = nodemailer.createTransport(nodemailersendgrid({
    auth:{
        api_key: process.env.API_KEY
    }
}))

exports.registration = asyncHandler( async (req,res,next) =>{
    
    const{HospitalName, Email , Password}=req.body;
    //check email validation
    console.log(HospitalName,Email);
    var valid = emailRegex.test(Email);

    if(!valid)
    {
        return res.status(422).json({error: "please enter a valid email"});
    }

    //all details should be mentioned
    if(!Email || !Password || !HospitalName) {
        
        return res.status(422).json({error:"please enter all the fields"});
    }

    const RegisteredHospital = await HospitalAuth.findOne({Email:Email});
    if(!RegisteredHospital)
    {
        const hashedpassword = await bcrypt.hash(Password,12);
        req.body.Password = hashedpassword;
        const NewHospiital = new HospitalAuth(req.body);
        await NewHospiital.save();
        let otp = OtpGenerator.generate(4, {
            alphabets: false,
            specialChars: false,
            upperCase: false,
        })
        const optdata = await new HospitalOtp({
            Email : Email,
            Otp : otp
        });
        console.log(otp);

        await optdata.save();

        res.status(200).json({Message : "hospital Successfully Registred , check your Email for Otp"});

        return transporter.sendMail({
            from: "sachan.himanshu2001@gmail.com",
            to: Email,
            subject: "signup successful",
            html: `<h1>welcome to Chrianjeev to enjoy our feature please verify your email using this otp : ${otp}</h1>`
        });
    }

    return res.status(500).json("already exist");
});

exports.extradetails = asyncHandler (async (req,res,next)=>{

    const {InchargeName,Address,State,City,Contact,BedAvailibility,PlasmaAvailibility,VaccineAvailibility} = req.body;
    //check everything is filled
    if (!InchargeName || !Address || !State || !City || !Contact || !BedAvailibility || !PlasmaAvailibility || !VaccineAvailibility) {
        return res.status(500).json({ error: "please enter all the fields" });
    }
    const UpdatedData = await HospitalAuth.findOneAndUpdate(req.params.id, req.body);
    await UpdatedData.save();
    return res.status(200).json({Message : "Details Successfully updated", UpdatedData});
});

exports.otpverification = asyncHandler (async (req,res,next)=>{
    const {Otp,Email} = req.body;
    const Otpdata = await HospitalOtp.findOne({Email : Email});  
    const RegisteredHospital = await HospitalAuth.findOneAndUpdate({Email:Email});
    if(!RegisteredHospital)
    {
        return res.status(500).json({Error : "No hospital is registered with this email id"});
    }
    if(!Otpdata)
    {
        return res.status(500).json({Error : "Otp is Expired"});
    }

    if(Otpdata.Otp == Otp && RegisteredHospital.Isverified == "false")
    {
        RegisteredHospital.Isverified = "true";
        await RegisteredHospital.save();
    }
    else if(Otpdata.Otp != Otp)
    {
        return res.status(500).json({Error : "Wrong Otp"});
    }
    else
    {
        return res.status(200).json({Messgae : "You are already verified"});
    }
    
});

exports.resendotp = asyncHandler ( async (req,res,next)=>{
    const Email = req.body.Email
    const checkHospital = await IndividualAuth.findOne({Email : Email});
    if(!checkUser)
    {
        return res.status(500).json({error : "Hospital is not registered with this id"});
    }
    const DeletePreOtp = await HospitalAuth.deleteOne({ Email: Email });

    let otp = OtpGenerator.generate(4, {
        alphabets: false,
        specialChars: false,
        upperCase: false,
    })
    const optdata = await new HospitalOtp({
        Email : Email,
        Otp : otp
    });
    console.log(otp);

    await optdata.save();

    res.status(200).json({Message : "hospital Successfully Registred , check your Email for Otp"});

    return transporter.sendMail({
        from: "sachan.himanshu2001@gmail.com",
        to: Email,
        subject: "signup successful",
        html: `<h1>welcome to Chrianjeev to enjoy our feature please verify your email using this otp : ${otp}</h1>`
    });
});