// Example 1
// ES5
const add = function (a, b) {
	return a + b;
}
// ES6
const add_es6 = (a, b) => {
	return a + b;
}
// Or
const add_es6 = (a, b) => a + b;

//Example 2
const double = function (number) {
	return 2 * number;
}

const double = number => 2 * number;

//Example 3
const numbers = [1,2,3];

numbers.map(function(number) {
	return 2 * number;
})

numbers.map(number => 2 * number);

// When to use Arrow Function

// ES5
const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		return this.members.map(function(member) {
			return `${member} is on team ${this.teamName}`;
		}.bind(this));
	}
};

// ES6
const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		return this.members.map((member) => {
			return `${member} is on team ${this.teamName}`;
		});
	}
};

team.teamSummary();