
const mysql = require('mysql2');
const fs = require('fs');
const caCertPath = './certificate/ca.pem';

var connection = mysql.createConnection({
	uri : 'mysql://avnadmin:AVNS_6CQ18w94WuIiuBOrEpT@mysql-3aaf5adc-test-vszd.c.aivencloud.com:27804/defaultdb?ssl-mode=REQUIRED',
    host:'mysql-3aaf5adc-test-vszd.c.aivencloud.com',
    port: 27804,
	database : 'defaultdb',
	user : 'avnadmin',
	password : 'AVNS_6CQ18w94WuIiuBOrEpT',
    ssl: {
        rejectUnauthorized: true,
        ca: caCertPath ? fs.readFileSync(caCertPath) : undefined
    }
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;