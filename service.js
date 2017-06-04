/**
 * Created by Administrator on 2017/6/4.
 */

const express = require('express');
var app = express();
const sendMail = require('./app/send-mail');

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/app/index.html');
});

app.get('/send',function(req,res){

    console.log(req.query)
    const option ={
        mailto:req.query.mailto,
        title:req.query.title,
    }

    sendMail(option);

    res.send('邮件发送成功！');//req.originalUrl获取当前URL
    // res.send(req.originalUrl);//req.originalUrl获取当前URL
});
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})