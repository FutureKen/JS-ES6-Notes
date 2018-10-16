//Example 1 - Do I have any computer which has at least 16 ram to run program?
var computers = [
	{name: 'Apple', ram: 24},
	{name: 'Asus', ram: 4},
	{name: 'Dell', ram: 32}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

//ES5 Solution
for (var i = 0; i < computers.length; i++) {
	var computer = computers[i];

	if (computer.ram < 16) {
		allComputersCanRunProgram = false;
	} else {
		onlySomeComputersCanRunProgram = true;
	}
}
"---"
allComputersCanRunProgram;
onlySomeComputersCanRunProgram;

//ES6 with every helper to find 'allComputersCanRunProgram'
computers.every(function(computer) {
	return computer.ram > 16;
});

//ES6 with every helper to find 'onlySomeComputersCanRunProgram'
computers.some(function(computer) {
	return computer.ram > 16;
});

//Example 2 - Find at least some name longer than 4 chars

var names = [
	"Alex",
	"Matthew",
	"Joe"
];
//All name longer than 4 chars?
names.every(function(name) {
	return name.length > 4;
});
//At least one name longer than 4 chars?
names.some(function(name) {
	return name.length > 4;
});

//Exercise 1
/* 
Finding Submitted Users

Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.
*/
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];
//SOlution
var hasSubmitted = users.every(function(user) {
	return user.hasSubmitted;
});

//Exercise 2
/*
In Progress Network Requests

Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
*/
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(req) {
	return req.status === 'pending';	
});