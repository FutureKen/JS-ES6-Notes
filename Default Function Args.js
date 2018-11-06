// Example 1
// Old default param
function makeAjaxRequest(url, method) {
	if (!method) {
		method = 'GET';
	}

}
// New default param
function makeAjaxRequest(url, method = 'GET') {
	
}

makeAjaxRequest('google.com', 'GET');

// Example 2


function User(id) {
	this.id = id;
} 

function generateId() {
	return Math.random() * 9999999;
}

// Old

function createAdminUser(user) {
	user.admin = true;

	return user;
}

createAdminUser(new User(generateId()));

// New
function createAdminUser(user = new User(generateId())) {
	user.admin = true;

	return user;
}

createAdminUser()

const someUser = new User(generateId());
createAdminUser(someUser);

// Example 3

// Old
function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}

// New
function sum(a = 0, b = 0) {
  return a + b;
}
