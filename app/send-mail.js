/**
 * Created by Administrator on 2017/6/4.
 */
const nodemailer = require('nodemailer');

module.exports = sendMail = (option) => {
// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.126.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'fenlgy@126.com',
            pass: 'fen288'
        }
    });

// setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <fenlgy@126.com>', // sender address
        to: option.mailto, // list of receivers
        subject:option.title, // Subject line
        // text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

