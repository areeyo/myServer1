var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/api/book',function(req,res){
	var books = [
		{title: 'Strange', price: 100},
		{title: 'Agu', price: 100},
		{title: 'Int', price: 100}
	];
	res.send(books);
})

var server = app.listen(3000, function () {

  	console.log("server is running")

})
