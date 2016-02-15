
  /*
    socket event: online offline msg:send msg:read
    request { ws:a random string , ...data: defined in every event }
    response { ws:as same as request ws , ...data: defined in every event }
    * online 
      flow:
        1.broadcast to all other i my online 
        2.get all unread msgs
        3.get all online users
      request:
        { sender: id }
      response:
        {
          sender:id,
          unread:[],
          online:[...onlineUsers]
        }
    * offline
      1.broadcast to all other i my offline
      2.other should upgrade the online list //ui
      request:
        { sender: id }
    * msg:send
      1.if reciver is online , save to the db marked read as soon as broadcast.emit a msg;
      2.if reciver is offline, save to the db marked unread.
      request:
        {
          sender:'',
          receiver:'',
          content:
        }
      response:
        {
          sender:'',
          receiver:'',
          content:
        }
    * msg:read
      1.update the db.
      request:
        {
          sender:'',reciver:''
        }
  */

var co = require('co');
var msgManage = require('./../api/msg')

var onlineUsers = new Set();

module.exports = function(socket){
  socket.on('online', function(data) {
    onlineUsers.add(data.sender);
    socket.emit('online', {
      sender:data.sender,
      online:[...onlineUsers].join()
    });
    co(function* (){
      var msg = yield msgManage.getMsgUnread(data);
      socket.emit('online', {
        sender:data.sender,
        unread:JSON.stringify(msg)
      });
    })
  });

  socket.on('offline', function(data) {
    onlineUsers.delete(data.sender);
    socket.emit('offline', {
      sender:data.sender,
      online:[...onlineUsers].join()
    });
  });

  socket.on('msg:send', function(data) {
    if(onlineUsers.has(data.receiver)){
      data.isread = '1';
      socket.emit('msg:send', data);
    }
    msgManage.saveMsg(data);
  });

  socket.on('msg:read', function(data) {
    msgManage.readMsg(data)
  });
}