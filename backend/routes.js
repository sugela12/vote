const express = require('express');
const router = express.Router();

//用户模块
const userRouter = require('./router/user');
router.use('/user', userRouter);

//投票模块
const voteRouter = require('./router/vote');
router.use('/vote', voteRouter);
module.exports = router;