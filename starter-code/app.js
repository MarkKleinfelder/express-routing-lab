
console.log("server work")

//Did you use npm install to
//add all these packages
//to our project?
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// How do we 'require' the candyRouter file?
var candy = require("./candyRouter.js");

app.use(bodyParser.json());
app.use('/candies',candy);



//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use

app.listen(3000);