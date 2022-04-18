
// Javascript implementation of QuickSort


// A utility function to swap two elements
function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
function partition(arr, low, high) {

	// pivot
	let pivot = arr[high];

	// Index of smaller element and
	// indicates the right position
	// of pivot found so far
	let i = (low - 1);

	for (let j = low; j <= high - 1; j++) {

		// If current element is smaller
		// than the pivot
		if (arr[j] < pivot) {

			// Increment index of
			// smaller element
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return (i + 1);
}

/* The main function that implements QuickSort
		arr[] --> Array to be sorted,
		low --> Starting index,
		high --> Ending index
*/
function quickSort(arr, low, high) {
	if (low < high) {

		// pi is partitioning index, arr[p]
		// is now at right place
		let pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}


// Function to print an array
function printArray(arr, size) {
	for (let i = 0; i < size; i++)
		document.write(arr[i] + " ");

	document.write("<br>");
}

// Driver Code

let arr = [ 52, 37, 63, 14, 17, 8, 6, 25 ];
let n = arr.length;

quickSort(arr, 0, n - 1);
document.write("Sorted array: <br>");
printArray(arr, n);


/* Complexities.
Time taken by QuickSort, in general, can be written as following. 

 T(n) = T(k) + T(n-k-1) + \theta(n)
The first two terms are for two recursive calls, the last term is for the partition process. k is the number of elements which are smaller than pivot. 
The time taken by QuickSort depends upon the input array and partition strategy. Following are three cases.

Worst Case: 
The worst case occurs when the partition process always picks greatest or smallest element as pivot. If we consider above partition strategy where last element is always picked as pivot, the worst case would occur when the array is already sorted in increasing or decreasing order. Following is recurrence for worst case.  

 T(n) = T(0) + T(n-1) + \theta(n)which is equivalent to  T(n) = T(n-1) + \theta(n)
The solution of above recurrence is  <strong>\theta          </strong>(n2). 

Best Case:
 The best case occurs when the partition process always picks the middle element as pivot. Following is recurrence for best case. 

 T(n) = 2T(n/2) + \theta(n)*/
}
