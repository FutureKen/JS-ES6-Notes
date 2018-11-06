// ES6 new feature - Classes

// Old way, very complicated :(
// Constructor function
function Car(options) {
	this.title = options.title;
}

// Prototype
Car.prototype.drive = function() {
	return 'vroom';
}

function Toyota(options) {
	Car.call(this, options);
	this.color = options.color;
}

Toyota.prototype = Object.create(car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
	return 'beep';
}

const car = new Car({title: 'Focus'});
car.drive();
car;

const toyota = new Toyota({color: 'red', title: 'Daily driver'});
toyota;

// Refactor using ES6 Classes
class Car {
	constructor({ title }) {
		this.title = title
	} // No comma here

	drive() {
		return 'vroom';
	}
}

const car = new Car({title: 'Toyota'});
car.drive();

class Toyota extends Car {
	constructor(options) {
		super(options); // Car.constructor()
		this.color = options.color;
	}

	honk() {
		return 'beep'
	}
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
toyota.honk();

toyota.drive();

// When to use Classes
// In react, old ways of creating class with helper library
React.createClass({
	doSomething() {

	},

	doSomethingElse() {

	}
});

// Now using generic Class approach, sometimes this Component here could be provided by react library.
class MyComponent extends Component {
	doSomething() {

	},

	doSomethingElse() {

	}
}

// Exercise 1
// You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 
// Initialize the Monster's health to 100. 
// The constructor will be called with an 'options' object that has a 'name' property. Assign the 'name' to the Monster
class Monster {
    constructor({ name }) {
        this.name = name;
        this.health = 100
    } 
}
// Now that you have a monster created, create a subclass of the Monster called Snake.  

// The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
// The instance of Snake that is passed in should have their health deducated by 10
class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    bite(Snake) {
        Snake.health -= 10;
    }
}