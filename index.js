const express = require('express');
const mongodb = require('mongodb');
const User = require('./models/userSchema');
require('./db/conn');
const app = express();

const port = process.env.PORT || 5000 ;

app.use(express.json());

app.post('/',async(req,res)=>{
    const { name, email, phone, password} = req.body;
    if (!name || !email || !phone|| !password ) {
        return res.status(404).json({ error: "please fill all the fields, require fields are - 'name/email/phone/password'  " })
    }
    const reaptEmail = await User.findOne({ email: email });
    const reaptPhone = await User.findOne({ phone: phone });
    if (reaptEmail) {
        return res.status(422).json({ error: "Email already exsits" });
    }
    else if (reaptPhone) {
        return res.status(422).json({ error: "Phone already exsits" });
    }
    else {
        let data = new User({ name, email, phone, password });
        let result = await data.save();
        res.status(201).send(`signup successful`);
        console.log(result);

    }
});

app.get('/',(req,res)=>{
    res.send('Node signup api ')
})

app.listen(port);