var path = require('path');

var app = require('koa')(),
    router = require('koa-router')(),
    staticServer = require('koa-static');

app
  .use(staticServer(path.join(__dirname,'./../../dist/public'))) //静态服务
  .use(router.routes()) //使用路由
  .use(router.allowedMethods());

// 这一行代码一定要在最后一个app.use后面使用
var mainServer = require('http').Server(app.callback());
var io = require('socket.io')(mainServer);

// Socket.io的标准用法
io.on('connection', require('./chat'));


function* respApi(next){
	this.body = 'api work!'
}

router.get('/api',respApi);
router.post('/api',respApi);

//todo:暂时先静态地输出客户端，服务端只处理ws和api的请求，后期再添加服务端渲染的内容。
// 开启服务器
mainServer.listen(3000);
console.log('app start!2')