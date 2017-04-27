// index.js
'use strict';

var http = require('http');
var EventEmitter = require('events');

var Athlete = require('./athletes');

var athlete1 = new Athlete('John', 'Karate');
var athlete2 = new Athlete('Mike', 'Swimming');
var athlete3 = new Athlete('Jeniffer', 'Carting');

athlete1.on("Athlete", function () {
	console.log("Athlete "+ this.Name + " in " + this.Subject, this.Medals);
});

athlete2.on("Athlete", function () {
	console.log("Athlete "+ this.Name + " in " + this.Subject, this.Medals);
});

athlete3.on("Athlete", function () {
	console.log("Athlete "+ this.Name + " in " + this.Subject, this.Medals);
});

athlete1.Plus();
athlete1.Plus();
athlete1.Minus();
athlete1.Minus();
athlete1.Minus();
athlete1.Minus();
athlete1.Plus();
athlete1.Plus();

athlete2.Plus();
athlete2.Plus();
athlete2.Plus();
athlete2.Plus();

athlete3.Plus();

http.createServer(function (req,res) {
	res.end('success\n');
}).listen(3000,'127.0.0.1');
console.log('listening on port 3000');