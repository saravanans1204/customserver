

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;


app.get('/', async (req, res) => {
    res.send('<h1>happening</h1>')
});

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

// app.get('*', function(req, res){
//     if(res.status(404)){
//        return res.render('error')
//     }
//   });

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

