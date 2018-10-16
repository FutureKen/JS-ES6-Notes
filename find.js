//Example 1 - Find exact user
var users = [
	{name: 'Jill'},
	{name: 'Alex'},
	{name: 'Bill'}
];

var user;
//ES5 solution
for (var i = 0; i < users.length; i++) {
	if (users[i].name === 'Alex') {
		user = users[i];
		break;
	}
}
user;

//ES6 solution with find helper, only the 1st found will be returned
users.find(function(user) {
	return user.name === 'Alex';
});

//Example 2
function Car(model) {
	this.model = model;
}

var cars = [
	new Car('Honda'),
	new Car('BMW'),
	new Car('Lexus')
];

cars.find(function(car) {
	return car.model === 'BMW';
});

//Example 3
var posts = [
	{id: 1, title: 'New Post'},
	{id: 2, title: 'Old Post'}
];

var comment = {postId: 1, content: 'Great Post'};

function postForComment(posts, comment) {
	return posts.find(function(post) {
		return post.id === comment.postId;
	});
}

postForComment(posts, comment);

//Exercise 1
/* Finding Admin Users
Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
*/
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

//Solution
var admin = users.find(function(usr) {
	return usr.admin === true;
});

//Exercise 2
/*What's Your Balance?
Find the account with a balance of 12 and assign it to the variable 'account'.
*/
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];
//Solution
var account = accounts.find(function(acc) {
	return acc.balance === 12;
});

//Exercise 3
/*
This is a tough one!  The most common find operation is to an object that has a given property.  Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:
findWhere(ladders, { height: '20 feet' });
The object { ladders: '20 feet' } should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';


Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.

In summary:


*/
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

var criteria = { height: 20 };

//Solution
function findWhere(array, criteria) {
    var criKey = Object.keys(criteria)[0];
    return array.find(function(e) {
        return e[criKey] === criteria[criKey];
    });
}
var result = findWhere(ladders, criteria);
result;