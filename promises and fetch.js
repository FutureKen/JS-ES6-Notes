/*
3 States of Promises

1. unresolved - waiting for something to finish
2. resolved - something finished and it all went ok
3. rejected - something finished and something went bad

revsolved -> then
rejected -> catch
*/

//Example 1
//We can create a object by
promise = new Promise((resolve, reject) => {
	resolve();
});

//OR
promise = new Promise((resolve, reject) => {
	reject();
}); 
promise
	.then(() => console.log('Task finished!'))
	.then(() => console.log('2nd Callback get!!'))
	.catch(() => console.log('Something goes wrong!'));

//Async Promises
promise = new Promise((resolve, reject) => {
	//Simulate a long running process here
	setTimeout(() => {
		resolve();
	}, 3000);
});
promise
	.then(() => console.log('Task finished!'))
	.then(() => console.log('2nd Callback get!!'))
	.catch(() => console.log('Something goes wrong!'));

// New Fetch helper function 
url = "https://jsonplaceholder.typicode.com/posts/";
//Try to get some data but only header
fetch(url)
	.then(data => console.log(data));
//Get with json() now 'data' contains the data
fetch(url)
	.then(response => response.json())
	.then(data => console.log(data));


//Shortcoming of fetch
url = "https://jsonplaceholder.typicode.com/posts/123456"; 
//Expected to throw 404 error, but hits the server with status code 404 and goes 'then'
fetch(url)
	.then(response => console.log(response))
	.catch(error => console.log('BAD', error));

//Only when the server is a non-existing url
url = "https://jsonplaceholder.typicode123.com/posts/123456"; 
//This time it catch error because server can't be hit
fetch(url)
	.then(response => console.log(response))
	.catch(error => console.log('BAD', error));