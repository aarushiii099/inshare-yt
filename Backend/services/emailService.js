const nodemailer=require('nodemailer');
const SMTPConnection = require('nodemailer/lib/smtp-connection');

async function sendMail({ from, to, subject, text, html}) {
  let transporter=nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
  });

  let info= await transporter.sendMail({
    from:from,
    to:to,
    subject:subject,
    text:text,
    html:html
  });
  console.log(info);
}

module.exports=sendMail;