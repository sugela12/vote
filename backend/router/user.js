const express = require('express');

const router =  express.Router();

const userHandle = require('../router_handle/user');
//用户注册
router.post('/register', userHandle.register)

module.exports = router;