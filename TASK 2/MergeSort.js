
// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arrA[]
// Second subarray is arrB[]
const mergeSort = function(arrA,ArrB){
	let singleSorted = [];
	while (arrA.length && ArrB.length){
		if(arrA[0] < ArrB[0]) {
			singleSorted.push(arrA[0]);
			arrA.shift();
		}else {
			singleSorted.push(ArrB[0]);
			ArrB.shift();
		}
	}
	return singleSorted.concat(arrA,ArrB);
}
let arrA = [ 234, 43, 55, 63, 5, 6, 235, 547 ];
let ArrB = [ 1, 4, 2, 5, -2, 3 ];
console.log(arrA,ArrB);
mergeSort(arrA,ArrB);
 /*Time Complexity: Sorting arrays on different machines. Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. 
T(n) = 2T(n/2) + θ(n)

The above recurrence can be solved either using the Recurrence Tree method or the Master method. It falls in case II of Master Method and the solution of the recurrence is θ(nLogn). Time complexity of Merge Sort is  θ(nLogn) in all 3 cases (worst, average and best) as merge sort always divides the array into two halves and takes linear time to merge two halves.
Auxiliary Space: O(n)*/