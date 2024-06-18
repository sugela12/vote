const mysql = require('mysql');

//创建数据库连接池
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'123456',
    database: 'vote'
})

//对外暴露数据库
module.exports = db;