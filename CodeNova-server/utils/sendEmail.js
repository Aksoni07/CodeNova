const nodemailer = require('nodemailer');

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST, // smtp.gmail.com
      service: process.env.SERVICE, //gmail
      port: Number(process.env.EMAIL_PORT), //465 , ssl , tls
      secure: Boolean(process.env.SECURE), //true
      auth: {
        user: process.env.USER, //our email at gmail.com
        pass: process.env.PASS, //our emailpassword
      },
    });
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log('email send successfully');
  } catch (err) {
    console.log('email not send');
    console.error(err);
  }
};
