var path = require('path');
var app = require('koa')(),
    router = require('koa-router')(),
    serve = require('koa-static');

// 使用./public下的静态文件
app.use(serve(path.join(__dirname,'public')));

// 使用路由
app
  .use(router.routes())
  .use(router.allowedMethods());

// 这一行代码一定要在最后一个app.use后面使用
var server = require('http').Server(app.callback()),
    io = require('socket.io')(server);

router.get('/', function *(next) {
  this.body = require('./page.generated.js');
});

// Socket.io的标准用法
io.on('connection', function(socket){
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

// 开启服务器
server.listen(3000);
console.log('app start!')