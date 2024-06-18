
const db = require('../db/index.js'); 
//用户注册
exports.register = (req, res) => {
   const userInfo = req.body;
   const sql = 'select * from user where username = ?';
   db.query(sql, userInfo.username, (err, result) => {
    if(result.length > 0) {
        return res.send({status: 1, message: '用户名已存在'});
    }
    const sql1 = 'insert into user set username = ?, password = ?';
    db.query(sql1,[userInfo.username,userInfo.password],(err,result)=>{
        if(err) return res.send({status: 1, message: err.message});
        res.send({status: 0, message: '注册成功'});
    })

   })
}