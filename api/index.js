const express = require('express');
const mongoose = require('mongoose');
const connect = require('./db');
const cors = require('cors');
const User = require('./Schema/UserSchema');

const port = 5000;

const app = express();

connect();

app.use(express.json());
app.use(cors());

app.post('/register', async(req, res)=>{
    const { name, email, password, role, status} = req.body;
    let user = await User.findOne({email});
    if(user){
        return res.status(400).json({msg: 'User already exists'});
    } else{
       user = new User({name, email, password, role, status});
        await user.save();
        res.json({msg: 'User registered successfully'});
    }
});

app.listen(port,()=>console.log(`Server running on http://localhost:${port}`));