//Example 1 - Only show fruit
var products = [
	{name: 'apple', type: 'fruit'},
	{name: 'banana', type: 'fruit'},
	{name: 'celery', type: 'vegetable'},
	{name: 'cucumber', type: 'vegetable'}
];

//ES5 solution
var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
	if (products[i].type === 'fruit') {
		filteredProducts.push(products[i]);
	}
}
filteredProducts;

//ES6 filter helper, remove products which is non-fruit
products.filter(function(product) {
	return product.type === 'fruit';
});

//Example 2 - Multiple filters
var products = [
	{name: 'apple', type: 'fruit', quantity: 0, price: 1},
	{name: 'banana', type: 'fruit', quantity: 9, price: 7},
	{name: 'celery', type: 'vegetable', quantity: 15, price: 15},
	{name: 'cucumber', type: 'vegetable', quantity: 5, price: 5}
];

// Type is 'Vegetable', quantity is greater than 0, price is less than 10

products.filter(function(product) {
	return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

//Example 3 - Associate post with comments array
var post = {id: 4, title: 'New Post'};
var comments = [
	{postId: 4, content: 'awesome post'},
	{postId: 3, content: 'it is ok'},
	{postId: 4, content: 'somehow reasonable'}
];

function commentsForPost(post, comments) {
	return comments.filter(function(comment) {
		return comment.postId === post.id;
	});
}

commentsForPost(post, comments);

//Exercise 1
//Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50.  Assign this new array to a variable called 'filteredNumbers'.
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

//Solution
var filteredNumbers = numbers.filter(function(num) {
	return num > 50;
});

//Exercise 2
//Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];
//Solution
var filteredUsers = users.filter(function(user) {
	return user.admin === true;
});

//Exercise 3*
/*
Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.

For example:

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 
lessThanFifteen // [ 10 ];
*/
//Solution
function reject(array, iteratorFunction) {
  return array.filter(function(e) {
    return !iteratorFunction(e);
  });
}
