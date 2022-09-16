

// 2. Write a JS code to print a 2D array
// Function `printArray()` prints all the elements of a 2D array using nested for loops.



function printArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
var arr = [[1, 2],
          [3, 4],
          [5, 6]];

printArray(arr)





