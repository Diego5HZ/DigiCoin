const mysql = require('mysql');
module.exports = () => {
	return mysql.createConnection({
		host: 'us-cdbr-east-06.cleardb.net',
		user: 'ba0ae1386dc485',
		password: 'e11c1ddc',
		database: 'heroku_3167f95de7bdfc6'
	});
}