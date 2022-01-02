import { request, response } from "express";
import  mongoose  from "mongoose";

// declaring all mongoose schema to get/post them from/to DB
const userSchema = new mongoose.Schema({mail:String,phone:String, type:String,password:String});
const users = mongoose.model("t_users",userSchema);

// get one user by mail
const getUserByMail= (request,response) =>{

    // getting all params from http request
    const mail = request.params.mail;
    
    // find the user in moongoose schema
    users.findOne({mail:mail}).then(result=>{
        response.status(200).json(result);
    });
}

// getting all users from t_users
const getAllUsers=(request,response)=>{
    users.find().then(result=>{response.status(200).json(result)});
}

// insert new user to mongoDB
const insertNewUser=(request,response)=>{
    // getting al params from request
    const user  = new users({mail:request.params.mail,phone:request.params.phone,password:request.params.password,type:request.params.type});
    
    user.save().then(result=>{response.status(200).json(result)});
}

// update user by mail
const updateUserByMail=(request,response)=>{
    // find user at mongo and update it    
    users.updateOne({mail:request.params.mail},{password:request.params.password,type:request.params.type,phone:request.params.phone})
    .then(result=>{response.status(200).json(result)});
}

// delete user by mail
const deleteUserByMail=(request,response)=>{
    console.log({mail:request.params.mail});
    users.deleteOne({mail:request.params.mail}).then(result=>{response.status(200).json(result)});
}
export {getUserByMail,getAllUsers,insertNewUser,updateUserByMail,deleteUserByMail};