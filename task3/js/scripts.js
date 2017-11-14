
var min = +prompt("Минимальное значение");
var max = +prompt("Максимальное значение");
var step = +prompt("Шаг");

function generateRange(min, max, step) {
	var arr = [];
	var currentValue = min;
	var i = 0; 
	while (currentValue <= max) {
		arr[i] = currentValue;
		currentValue = currentValue+step;
		i++;
	}
	return arr;
}
console.log(generateRange(min, max, step));
	
		
   

	