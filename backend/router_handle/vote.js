const db = require ('../db/index');

//创建一个新的投票项目
exports.create = (req, res) => {
    const voteInfo = req.body;
    const sql = 'insert into vote_list set vote_name = ? , vote_num = ? , avatar = ?';
    db.query(sql,[voteInfo.vote_name,voteInfo.vote_num,voteInfo.avatar],(err,result)=>{
        if(err)
            return res.send({status: 1, message: err.message});
        else{
            res.send({
                status: 0,
                message: '创建投票成功'
            })
        }
    })
}
//为某人投票
exports.vote = (req,res) => {
    const voteInfo = req.body
    const sql = 'update vote_list set vote_num = vote_num + 1 where id = ?';
    db.query(sql,voteInfo.id,(err,result)=>{
        if(err){
            return res.send({status: 1, message: err.message});
        }
        res.send({
            status: 0,
            message: '投票成功'
        })
    })
}
//获取投票列表
exports.list = (req,res) =>{
    const sql = "select * from vote_list";
    db.query(sql,(err,result)=>{
        if(err){
            res.send({status: 1, message: err.message});
        }
        else{
            res.send({
                status: 0,
                message: result
            })
        }
    })
}