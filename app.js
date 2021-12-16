const express = require('express');
const app = express();
const port = 80;

app.get('/', (req,res) => {
    console.log("[GET]http://ec2-3-35-24-147.ap-northeast-2.compute.amazonaws.com/")
    res.send('hello world');
})

app.listen(port, () => {
    console.log(`Example app listening at http://ec2-3-35-24-147.ap-northeast-2.compute.amazonaws.com/:${port}`)
})