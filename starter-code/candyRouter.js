
var express = require('express');
var bodyParser = require('body-parser');
var candyRouter = express.Router();

var candies =[
{id:1,
 name:"Snickers",
 color: "Brown"},
 
{id:2,
 name:"Swedish Fish",
 color:"red"},

{id:3,
 name:"M&Ms",
 color: "Multi-Color"},

 {id:4,
  name: "Abba Zabba",
  color: "Unknown"}
];



//What would need to go into candies
//in order to pass our first test?

candyRouter.get('/', function(req,res) {
	res.send(candies);
	//index
});

candyRouter.get('/:id',function(req,res){
	res.send(candies[req.params.id -1]);
});
 	//show

candyRouter.post('/',function (req,res){
 	candies.push(req.body);
 	res.send(req.body);
 });
 	//create

candyRouter.put('/:id',function (req,res){
	candies[req.params.id-1]=req.body;
	res.send(req.body);
});
	//Update


candyRouter.delete('/:id',function (req,res){
	candies.splice(req.params.id-1,1);
	res.send({"message":"deleted"});

});
	//Delete





module.exports = candyRouter;