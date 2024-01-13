//Importing the necessary modules

const express = require('express');
const crypto = require('crypto');
const ethers = require('ethers');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.static(__dirname));
const jwt = require('jsonwebtoken');
//Setting up middleware to handle  JSON  requests
app.use(express.json());
app.use(bodyParser.json());
//Handling get requests to the root URL ("/")
app.get('/',(req,res) => {
    //Sending the 'index.html' in response
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get()
//Starting the server on port no. 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
})