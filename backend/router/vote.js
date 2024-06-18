const express = require('express');

const router = express.Router();

const voteHandle = require('../router_handle/vote');

//创建一个新的投票项目
router.post('/create', voteHandle.create);

//投票
router.post('/vote', voteHandle.vote)

//获取投票列表
router.get('/list', voteHandle.list)
module.exports = router;