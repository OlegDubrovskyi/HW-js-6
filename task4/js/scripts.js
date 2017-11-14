
var arr = ["codewars","javascript","java"];

function cutIt(arr) {
	var elementlength = arr[0].length; 
	console.log(elementlength);
	for(var i = 0; i < arr.length; i++) {
		if(elementlength > arr[i].length){
		 	elementlength = arr[i].length;
		}
	}

	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].substring(0, elementlength);
	}
	return arr;
}

console.log(cutIt(arr));
	
	
		
   

	