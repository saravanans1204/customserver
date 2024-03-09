


const express=require('express');
const md5 = require('md5');
const mongoose=require('mongoose')
const lo=require('lodash');
const app=express();
const PORT=process.env.PORT || 9000
const {createInstance,connection}=require('./db/connect.js');
const {createEntry}=require('./db/connect.js');
const { loginDb } = require('./db/dataDb.js');

const mongoPassword='UpCN8bFMC0WJHXsg'
const entryUri=`mongodb+srv://luffytarojr:${mongoPassword}@skill0.lbfebou.mongodb.net/?retryWrites=true&w=majority&appName=skill0`
// const {loginDb}=require("./db/userDb.js")
// express functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



let connectionTwo;
const addEntries=async (Db)=>{
    const initalEntry=await Db.find().exec()
    store=initalEntry
    // console.log(store)

}

connectionTwo=mongoose.createConnection(entryUri)


// routers
app.get('/api', async (req, res) => {
    // Data to be inserted
    const data1 = {
        _id: '65eb11a2be8309f353afdb81',
        message: 'Hello from MongoDB!'
    };

    res.send('<h1>happening</h1>')
});

app.get('/api/getData', async (req, res) => {
 
    loginDb.find({ "message": { $exists: true } }).then((resolve,reject)=>{
        // console.log(resolve)
        if(resolve!==null){    
            res.json(resolve[0].message);
        }else{
            const jsonData = { message: 'Error 500' };
            res.json(jsonData);

        }
    })
    
});

app.get('*', function(req, res){
    if(res.status(404)){
       return res.render('error')
    }
  });

app.listen(PORT,()=>{
    console.log(`The app start on http://localhost:${PORT}`);
});
