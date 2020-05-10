const mysql = require('mysql');
module.exports = () => {
	return mysql.createConnection({
		host: 'us-cdbr-east-06.cleardb.net',
		user: 'b016ae25b95b0d',
		password: '49858173',
		database: 'db_newone',
		port: '3306'
	});
}