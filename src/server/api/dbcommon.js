var mysql      = require('mysql');
var mysqlConfig = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
};


 
module.exports = function doSql(prepareParamFn){
	return function(param){
		var connection = mysql.createConnection(mysqlConfig);
		connection.connect();
		var retVal = new Promise(function(resolve,reject){
			var preparedParam = prepareParamFn(param)
			connection.query(preparedParam,function(err,data){
				// console.log(preparedParam);
				if(err){
					reject(err);
				}else{
					resolve(data);
				}
			});
		})
		connection.end();
		return retVal;
	}
}