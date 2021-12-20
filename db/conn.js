const mongoose = require('mongoose');




const DB = "mongodb+srv://neel:raja1234@cluster0.ukzjx.mongodb.net/node?retryWrites=true&w=majority"



mongoose.connect(DB).then(()=>{
    console.log('connection success')
}).catch((err)=>{
    console.log(err)
});