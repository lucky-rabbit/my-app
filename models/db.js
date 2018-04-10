
var mongoose = require('mongoose');
//连接login数据库
var db = mongoose.createConnection('mongodb://localhost/logindb');

// 链接错误
db.on('error', function(error) {
    console.log(error);
});

// 链接成功
db.once('open', function(error) {
    console.log("数据库连接成功");
});

module.exports = db;