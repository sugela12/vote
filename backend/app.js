//引入express框架
const express = require('express');
//创建express实例
const app = express();
const port = 3000;
//引入body-parser中间件
const bodyParser = require('body-parser');
//引入cors中间件
const cors = require('cors');
//引入路由
const routes = require('./routes');


app.use(bodyParser.urlencoded({ extended: true }));//当extend为false时，值为数组或字符串，true时值为任意类型
app.use(bodyParser.json());//将请求数据转为json
app.use(cors());
app.use(routes);
app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})