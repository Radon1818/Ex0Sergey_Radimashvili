// athletes.js
'use strict';

var EventEmitter = require('events');

module.exports = class SomeAthlete extends EventEmitter
{
	constructor (AthleteName, Subject) 
	{
		super();
		this.Name = AthleteName;
		this.Medals = 0;
		this.Subject = Subject;
		var blaaa = " ";
	}

	Plus() 
	{
		this.Medals++;
		this.emit("Athlete");
	}

	Minus() 
	{
		if (this.Medals == 0 )
		{
			console.log("The athlete "+ this.Name + " competes in " + this.Subject + "but he is already has 0 Medals");
		}
		else
		{
			this.Medals--;
			this.emit("Athlete");
		}
	}
}