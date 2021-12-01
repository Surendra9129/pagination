const nodemailer=require('nodemailer');
require('dotenv').config();
   module.exports=nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "5c3af1ef45b9b3",
      pass: "15094950bfeb7f",
    },
  });