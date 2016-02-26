var db = require('./../dbcommon');


exports.ins = db(function(param){
	return {
		sql:'INSERT INTO tb_ins set ?',
		values:param
	}
});

exports.upd = db(function(param){
	var newParam = Object.assign(param);	
	var id = newParam.id;
	delete newParam.id;
	return {
		sql:'update tb_ins set ? where id=?',
		values:[newParam,id]
	}
});


exports.qry = db(function(param){
	return {
		sql:'select * from tb_ins where 1=?',
		values:1
	}
});

exports.del = db(function(param){
	return {
		sql:'delete from tb_ins where id=?',
		values:param
	}
})