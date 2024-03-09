const mongoose=require('mongoose');
const mongoPassword='UpCN8bFMC0WJHXsg'
const URI=`mongodb+srv://luffytarojr:${mongoPassword}@skill0.lbfebou.mongodb.net/?retryWrites=true&w=majority&appName=skill0`
const {createInstance,connection}=require('./connect.js');



const loginSchema=new mongoose.Schema({
    displayname:String,
    message:String
})


const connectionOne=mongoose.createConnection(URI)
const loginDb=createInstance(connectionOne,'neededData',loginSchema)


module.exports.loginDb=loginDb;