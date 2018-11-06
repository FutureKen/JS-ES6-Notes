// Example 1
// old
function addNumbers(numbers) {
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}

addNumbers([1,2,3,4,5]);

// What if I want to pass in a bunch of numbers not in an array? Like addNumbers(1,2,3,4,5);

// Should we do?
function addNumbers(a,b,c,d,e) {
	const numbers = [a,b,c,d,e];
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}

// ES6 way
// this way can accept any number of arguments.
function addNumbers(...numbers) {
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}

addNumbers(1,2,3,4,5,6,7,8,9);

// Example 2

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

// Typical way
defaultColors.concat(userFavoriteColors);

// Spread operator
[ ...defaultColors, ...userFavoriteColors]

// I can add in new elements at same time of joinning arrays
[ ...defaultColors, 'blue', ...userFavoriteColors]

// Example 3

// I always buy 'milk'
function validateShopingList(...items) {
	if (items.indexOf('milk') < 0) {
		return ['milk', ...items];
	}
	return items;
}
validateShoppingList('orange', 'bread', 'eggs');

// Example 4

const MathLibrary = {
	calculateProduct(a, b) {
		return a * b;
	}
}

// What if I need to rename the method 'calculateProduct'?
// Maybe a duplicate method?
const MathLibrary = {
	calculateProduct(a, b) {
		return a * b;
	},
	multiply(a, b) {
		return a * b;
	}
} 
// With rest operator
const MathLibrary = {
	calculateProduct(...rest) {
		return this.multiply(...rest);
	},
	multiply(a, b) {
		return a * b;
	}
} 
