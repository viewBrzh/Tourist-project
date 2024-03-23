const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'srv1278.hstgr.io',
    user : 'u134026110_64127087',
    password : 'pE4=s!TBj',
    database : 'u134026110_64127087'
});

module.exports = pool.promise();