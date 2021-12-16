require("dotenv").config();
const express = require('express');
const app = express();
const port = 80;
const mysql = require('mysql2');
const fs = require('fs');

// mysql Connection
const connection = mysql.createConnection({
    ssl: {
        ca:fs.readFileSync('./global-bundle.pem')
    },
    host: `${process.env.DATABASE_HOST}`,
    user: `${process.env.DATABASE_USER}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    port: `${process.env.DATABASE_PORT}`,
    database: `${process.env.DATABASE_DATABASE}`
});

// console.log(process.env.DATABASE_HOST)
app.get('/', (req,res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    console.log('[GET]',ip)

    connection.query(
        'SELECT * FROM `BOARD_QA`',
        function (err,res,fields){
            console.error('MYSQL err : ', err);
            console.log('MYSQL res : ',res);
        }
    )
    
    res.send('hello world');
})

app.listen(port, () => {
    console.log(`Example app listening at http://ec2-3-35-24-147.ap-northeast-2.compute.amazonaws.com/:${port}`)
})