const { configDotenv } = require('dotenv');
const mysql = require('mysql2');

configDotenv('../')

const conSQL = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DABATASE
})

conSQL.connect((err) => {
    if (err) throw err;
    console.log(`SQL Connected`)
})

module.exports = conSQL;