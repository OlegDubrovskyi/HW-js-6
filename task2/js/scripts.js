var input = prompt("Введите строку");
var searchValue = prompt("Введите искомое значение");

function english(searchValue, input) {
	return input.toLowerCase().includes(searchValue.toLowerCase());
}

console.log(english(searchValue, input));