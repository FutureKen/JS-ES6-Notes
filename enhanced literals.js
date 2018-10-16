// Example 1
// ES5
function saveFile(url, data) {
	$.ajax({method: 'POST', url: url, data: data});
}

// ES6
function saveFile(url, data) {
	$.ajax({
		url,
		data,
		method: 'POST'
	});
}

// Example 2
// ES5
const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
// ES6
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};