// For..Of Loop
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
	console.log(color);
}

const numbers = [1,2,3,4];

let total = 0;
for (let nubmer of numbers) {
	total += number;
}

// What is generator? a function can be runned serveral times. 

// A simple example

function* shopping() {
	// stuff on the sidewalk

	// walking down the sidewalk

	// go into the store with cash
	const stuffFromStore = yield 'cash'; //Run the above codes until see the yield here

	// stop again to get laundry, walking to laundry place
	const cleanClothes = yield 'laundry';

	// walking back home
	return [stuffFromStore, cleanClothes];

}

// stuff in the store
const gen = shopping();
gen.next(); // leaving our house
// walked into the store
// walking up and down the aisles..
// purchase our stuff
gen.next('groceries'); // leaving the store with grocery
gen.next('cleanClothes');

// How generator works 

function* colors() {
	yield 'red';
	yield 'blue';
	yield 'green';
}


const gen = colors();
gen.next();
gen.next();
gen.next();
gen.next();

// Use generator as for loop for an array.
const myColors = [];
for (let color of colors()) {
	myColors.push(color);
}
myColors; // ['red', 'blue', 'green']

// Use generator as iterator for an object.


const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill'
};

const engieeringTeam = {
	testingTeam,
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
};

function* TeamIterator(team) {
	yield team.lead;
	yield team.manager;
	yield team.engineer;
	// How about we to iterate testing team members like:
	// yield team.testingTeam.lead;
	const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
	yield* testingTeamGenerator; //Generator delegation
}

function* TestingTeamIterator(team) {
	yield team.lead;
	yield team.tester;
}

const names = [];
for (let name of TeamIterator(engieeringTeam)) {
	names.push(name);
}

names; // ["Jill", "Alex", "Dave", "Amanda", "Bill"]

// Use Symbol iterator to refactor the above example

const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill',
	// Tell the for loop how to iterator this object
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.tester;
	}
};

const engieeringTeam = {
	testingTeam,
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.manager;
		yield this.engineer;
		yield* this.testingTeam; //get for loop into the yield of testingTeam
	}
};

const names = [];
for (let name of engieeringTeam) {
	names.push(name);
}

names; // ["Jill", "Alex", "Dave", "Amanda", "Bill"]

// When to use Generators - Generators with recursion

// tree structure, like reddit comments
class Comment {
	constructor(content, children) {
		this.content = content;
		this.children = children;
	}
	// * means we need to yield through the children
	*[Symbol.iterator]() {
		yield this.content;
		// Note that .forEach or .map do not work with iterator
		for (let child of this.children) {
			yield* child;
		}
	}
}

const children = [
	new Comment('good comment', [new Comment]),
	new Comment('bad comment', []),
	new Comment('meh', [])
]
const tree = new Comment('Great post!', children);
tree;

const values = [];
for (let value of tree) {
	values.push(value);
}

values;