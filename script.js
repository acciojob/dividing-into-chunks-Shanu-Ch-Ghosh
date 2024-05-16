const divide = (arr, n) => {
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let num of arr) {
        if (currentSum + num > n) {
            // If adding the current number exceeds the max sum, push the current subarray to the result
            result.push(currentSubarray);
            // Start a new subarray with the current number
            currentSubarray = [num];
            currentSum = num;
        } else {
            // Add the current number to the current subarray
            currentSubarray.push(num);
            currentSum += num;
        }
    }

    // Add the last subarray if it's not empty
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

// Example array
const arr = [1, 2, 3, 4, 1, 0, 2, 2];

// Get the value of n from user input
const n = parseInt(prompt("Enter n: "), 10);

// Compute the divided subarrays
const result = divide(arr, n);

// Display the result
alert(JSON.stringify(result));
