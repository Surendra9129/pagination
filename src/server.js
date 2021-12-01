const express=require('express');
const port=5000;
const app=express();
app.use(express.json());
const connect=require('./configs/db');
const post_controller=require('./controller/user.controller');

app.use('/users',post_controller);



    app.listen(port,async(req,res)=>{
        await connect();
        console.log(`running on port ${port}`);
    })


