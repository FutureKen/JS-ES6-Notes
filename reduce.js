//Example 1 - Add nums in array to sum
var numbers = [10, 20, 30];
var sum = 0;
//ES5
for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}
sum;
"---"
//ES6 with 'reduce' helper
numbers.reduce(function (sum, number) {
	return sum + number;
}, 0); //'0' is the initial value;

//Example 2
var primaryColors = [
	{color: 'red'},
	{color: 'yellow'},
	{color: 'blue'}
];

primaryColors.reduce(function(previous, primaryColor) {
	previous.push(primaryColor.color);
	return previous;
}, []);

//Example 3 - Validate parenthses
function validParens(str) {
	return !str.split("").reduce(function(previous, char) {
		if (previous < 0) {
			return previous;
		}
		if (char === "(") {
			return ++previous;
		}
		if (char === ")") {
			return --previous;
		}
		return previous;
	}, 0);
}

validParens("(("); //False
validParens("()"); //True;
validParens(")("); //True;

//Exercise 1
/*
Distance Traveled

Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'
*/
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip) {
	return sum + trip.distance;
}, 0);

//Exercise 2
/*
Reducing Properties

Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
*/
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    ++previous[desk.type];
    return previous;
}, { sitting: 0, standing: 0 });

//Exercise 3
/* Hardmode: Custom 'Unique' Helper

Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.  
*/
function unique(array) {
  return array.reduce(function(previous, num) {
  	if (!previous.find(function(ele) {return ele === num})) {
  		previous.push(num);
  	}
  	return previous;
  }, []);
}