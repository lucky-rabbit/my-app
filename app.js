var express = require('express');
var app = express();
var router = require('./router/index.js');
var db = require('./models/db.js');
var formidable = require('formidable');

//后端node入口
//拿到前端注册页面来的数据写入MongoDB，并返回一个数字。前端根据数字做相应的页面跳转

app.get('/reg', function(req,res){
    res.send("node启动成功")
});


app.post('/reg',function(req,res,next){
var form = new formidable.IncomingForm();
form.parse(req, function(err, fields) {
	//console.log('收到请求了'+fields)
	//前端来的请求数据写入数据库
	db.insertOne('login',{
		'username' : fields.username,
		'password' : fields.password
	}, function(err, result){
		if (err) {
			res.send({'res':-1});
		}
		res.send({'res':1})


	})



    });
})



app.listen(3001, () => {
    console.log('node服务器监听3001端口成功');
})

