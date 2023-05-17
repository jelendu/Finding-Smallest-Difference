// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:

// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96]
// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

// Write a function that determines the smallest difference.


function smallestDifference(arr1, arr2) {
    //if either input arrays are empty, return -1
    if(arr1.length === 0 || arr2.length === 0) { return -1; }
    //finding the largest possible difference first to eliminate
    let result = Number.MAX_SAFE_INTEGER; 
    for(let i = 0; i < arr1.length; i++){ //iteration
        for(let j = 0; j < arr2.length; j++){ //iteration
            if(Math.abs(arr1[i] - arr2[j]) < result){ //finds the absolute smallest positive difference
                result = Math.abs(arr1[i] - arr2[j]);
            }
        }
    }
    return result;
}

//calling the functions
const arr1 = [10, 20, 14, 16, 18];
const arr2 = [30, 23, 54, 33, 96];

console.log(smallestDifference(arr1, arr2)); 
