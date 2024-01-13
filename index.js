const express = require('express');
const crypto = require('crypto');
const ethers = require('ethers');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.static(__dirname));
const jwt = require('jsonwebtoken');
app.use(express.json());
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})