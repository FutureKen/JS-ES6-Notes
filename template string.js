//Example 1
function getMessage() {
	return `The year is ${new Date().getFullYear()}`
}

getMessage();

//Example 2

const device_id = 5;
const username = "Jone";
//ES5
const data = '{"device_id":"'+ device_id +'", "username":"'+ username +'"}';
data;

//ES6
const dataES6 = `{"device_id": "${device_id}", "username": "${username}"}`;
dataES6;

//Example 3
const year = 2016;
const yearMessage = `The year is ${year}`;

//Exercise 1
//Refactor the function to use template strings
function doubleMessage(number) {
  return "Your number doubled is " + (2 * number);
}
//Solution
function doubleMessage(number) {
  return `Your number doubled is ${number * 2}`;
}

//Exercise 2
function fullName(firstName, lastName) {
  return firstName + lastName;
}
//Solution
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

