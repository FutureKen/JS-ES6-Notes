//Array Helpers

//Traditional for loop;
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

//ES6 forEach helper
colors.forEach(function(color) {
	console.log(color);
});

/* Another example with sum of arrays */

//Create an array of numbers
var numbers = [1,2,3,4,5];
//Create a var to hold the sum
var sum = 0;
//Loop over the array, incrementing the sum
numbers.forEach(function(num){
	sum += num;
});
//Print the sum
console.log(sum);

//Exercise: get all the areas from images array
//Question:
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
//Solution:
images.forEach(function(img) {
   areas.push(img.height * img.width); 
});