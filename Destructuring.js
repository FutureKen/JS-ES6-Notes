// Example 1
// ES5
var expense = {
	type: 'Business',
	amount: '$45 USD'
}

var type = expense.type;
var amount = expense.amount;

// ES6, note that the variable name must be identical to property name.
const { type, amount } = expense;

// Example 2 - Destructuring Arguments Object
var savedFiled = {
	extension: 'jpg',
	name: 'repost',
	size: 14040
};


function fileSummary(file) {
	return `The file ${file.name}.${file.extension} is of size ${file.size}`
}

fileSummary(savedFiled);

// Destructuring way, can add more object
function fileSummary({name, extension, size}, { color }) {
	return `The file ${name}.${extension} is of size ${size} and ${color} color`;
}

fileSummary(savedFiled, {color: 'red'});

// Example 3 - Destructuring Arrays
const companies = [
	'Google',
	'Facebook',
	'Uber'
];

// Destructing vars
const [ name, name2, name3, name4 ] = companies;
name; // 'Google'
name2 // 'Facebook'
name3 // 'Uber'
name4 // undefined


const [ name, name2, ...rest ] = companies;
rest; // ['Uber']

// Example 3 - Destructing arrays and objects together
const companies = [
	{
		name: 'Google',
		location: 'Mountain View'
	},
	{
		name: 'Facebook',
		location: 'Menlo Park'
	},
	{
		name: 'Uber',
		location: 'San Francisco'
	}
]

// Get Google's location
// ES5
var location = companies[0].location;

// ES6
const [{ location }] = companies;

// Get Google's first location, pull out the location object first, then get the 1st element 
const Google = {
	locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ location ]} = Google;
location;

// Example 4 - When to use
function signup(username, password, email, dateOfBirth, city) {
	// create new user

}
signup('myname', 'mypassword', 'email@example.com', '1/1/1990', 'New York');


// It is easy to mess up the order of properties. So let's do this:
function signup({username, password, email, dateOfBirth, city}) {
	// create new user

}

const user = {
	username: 'myname',
	password: 'mypassword',
	email: 'email@example.com',
	dateOfBirth: '1/1/1990',
	city: 'New York'
}
signup(user);

// Example 5 -

 // If we need to convert
const points = [
	[4, 5],
	[10, 1],
	[0, 40]
];

// Into
[
	{ x: 4, y: 5},
	{ x: 10, y: 1},
	{ x: 0, y: 40}
]

// Instead of for loop, ES6
points.map(pair => {
	const x = pair[0];
	const y = pair[1];
});

// Or even better by doing this
points.map(([x, y]) => {
	return { x, y };
});

// The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.

// An array for a class has the form [subject, time, teacher]

// The resulting data structure should look something like the following:

// const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher };
});

// Recursion with Destructuring

// Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)

// Input:

// double([1,2,3])

// Output

// [2,4,6]

// Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array?

const numbers = [1, 2, 3];

function double(arr) {
    let [number, ...rest] = arr;
    return !isNaN(number) ? [number * 2, ...double(rest)] : [];
}

// Or

const double = ([number, ...rest]) => {
return number !== undefined ? [number * 2, ...double(rest)] : [];
}