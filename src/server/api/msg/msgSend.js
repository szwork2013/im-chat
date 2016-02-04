var db = require('./../dbcommon');

module.exports = db(function(connection,param){
	return new Promise(function(resolve,reject){
		param.id = Math.random().toString(36);
		param.date = '' + (+new Date);
		param.isread = '0';
		connection.query('insert into tb_msg set ?',param,function(err,result){
			if(err)  return reject('aaa');
			resolve(result);
		})
	})
})