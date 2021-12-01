
const express=require('express');
const router=express.Router();
const user=require('../model/user.model')
const transporter=require('../configs/mail');

router.post('/',async(req,res)=>{
     const name=req.query.name;
        
   

     const message = {
          from: "a@a",
          to: ["c@c","b@b","avdf@agbr"],
          subject: "Welcome to ABC",
          text: ` Please confirm your email address ${this.name}`,
          html: `<p> Please confirm your email addresse ${this.name}</p>`
        };

        transporter.sendMail(message);

     const new_user=await user.create(req.body);
     res.send({new_user});
})


router.get('/',async(req, res)=>{
     const page=+req.query.page ||1;
     const size=+req.query.size ||2;
     const skip=(page-1)*size;

     const new_user= await user.find({}).skip(skip).limit(size).lean().exec();
     const total= Math.ceil(await user.find({}).countDocuments()/size);
     console.log(total);
     res.json({new_user,total});
})

module.exports=router;