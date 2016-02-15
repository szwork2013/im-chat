var db = require('./../dbcommon');

exports.getMsgUnread = db(function(param){
	return {
		sql:'SELECT `id`, `date`, `content`, `sender`, `receiver`, `isread` FROM `tb_msg` where `isread`=? and `receiver`=?',
		values:['0',param.sender]
	}
});


exports.saveMsg = db(function(param){
	param.id = Math.random().toString(36);
	param.date = '' + (+new Date);
	param.isread = param.isread || '0';
	delete param.ws;
	return {
		sql:'insert into tb_msg set ?',
		values:param
	}
})

exports.readMsg = db(function(param){
	var newParam = [param.sender,param.receiver];
	return {
		sql:'update tb_msg set isread = `1` where sender = ? and receiver=?',
		values:newParam
	}
})