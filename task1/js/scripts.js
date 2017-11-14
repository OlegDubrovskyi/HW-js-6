var input = prompt("Введитес строку");

function english(input) {
	return input.toLowerCase().includes("english");
}

console.log(english(input));