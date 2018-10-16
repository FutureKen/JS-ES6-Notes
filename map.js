//Example 1

var numbers = [1,2,3];
var doubledNum = [];
//ES5 solution to get the doubled number array;
for (var i = 0; i < numbers.length; i++) {
	doubledNum.push(numbers[i] * 2);
}
//ES6 solution with map helper to get the doubled number array;
var es6doubled = numbers.map(function(num) {
	return num * 2;
});

doubledNum;
es6doubled;

//Example 2
var cars = [
	{model: 'Toyota', price: 'Cheap'},
	{model: 'BMW', price: 'Expensive'}
];
var prices = cars.map(function (car) {
	return car.price;
});

prices;//["Cheap", "Expensive"]

//Exercise 1
//Using map, create a new array that contains the 'height' property of each object.  Assign this new array to the variable 'heights'.
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];
//Solution:
var heights = images.map(function(img) {
    return img.height;
});

//Exercise 2
//Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];
//Solution:
var speeds = trips.map(function(trip) {
    return trip.distance / trip.time;
});

//Exercise 3
/* Implementing 'Pluck'
Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 
Example:
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
*/
//Solution:

function pluck(array, property) {
    return array.map(function(e) {
        return e[property];
    });
}
