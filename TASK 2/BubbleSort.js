// Optimized implementation of bubble sort Algorithm
var arr = [ 234, 43, 55, 63, 5, 6, 235, 547 ];

function bubbleSort(arr){
	
var i, j;
var len = arr.length;
	
var isSwapped = false;
	
for(i =0; i < len; i++){
	
	isSwapped = false;
	
	for(j = 0; j < len; j++){
		if(arr[j] > arr[j + 1]){
		var temp = arr[j]
		arr[j] = arr[j+1];
		arr[j+1] = temp;
		isSwapped = true;
		}
	}
	
	// IF no two elements were swapped by inner loop, then break
	
	if(!isSwapped){
	break;
	}
}
	
// Print the array
console.log(arr)
}

// calling the bubbleSort Function
bubbleSort(arr)


/*Complexities
Worst Case and Average case time complexity 
If the array is in reverse order then this condition is the worst case and Its time complexity is O(n2).

Best case time complexity
If the array is already sorted then it is the best-case scenario and its time complexity is O(n)

Auxiliary Space: O(1)*/