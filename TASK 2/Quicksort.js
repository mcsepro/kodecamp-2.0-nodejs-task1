var items =[ 234, 43, 55, 63, 5, 6, 235, 547 ];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //print [5, 6, 43, 55, 63, 234, 235, 547]

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