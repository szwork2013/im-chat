var mysql      = require('mysql');
var mysqlConfig = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
};


 
module.exports = function doSql(fn){
	return function(param){
		var connection = mysql.createConnection(mysqlConfig);
		connection.connect();
		var retVal = fn(connection,param)
		connection.end();
		return retVal;
	}
}

// exports.dbWrap = function(fn){
// 	return function(param){
// 		connection.connect();
// 		var retVal = fn(connection,param);
// 		connection.end();
// 		return retVal;
// 	}
// }
