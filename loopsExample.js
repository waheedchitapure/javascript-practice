1. Write a JS code to print numbers from 1 to 10
Function `printNumbers()` prints numbers from 1 to 10 using for loop.

function printNumbers() {
        for (var i = 1; i <= 10; i++) {
            console.log(i);
        }
    }

printNumbers() //1 2 3 4 5 6 7 8 9 10
2. Write a JS code to print a 2D array
Function `printArray()` prints all the elements of a 2D array using nested for loops.

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

printArray(arr) //1 2 3 4 5 6
3. Write a JS code to print Even numbers in given array
Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator.

function printEven(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]); //print even number
        }
    }
}
var arr = [13, 23, 12, 45, 22, 48, 66, 100]

printEven(arr) //12 22 48 66 100
4. Write a JS code to delete all occurrence of element in given array
Function `deleteElement()` deletes all the occurrence of element from the given array.

function deleteElement(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ele) {
            arr.splice(i, 1); //Delete element from array
        }
    }
    return arr;
}
var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
arr = deleteElement(arr, 56)

console.log(arr); //[23, 4, 78, 5, 63, 45, 210]
5. Write a JS code to demonstrate Async loop
For loop consisting of setTimeout() function to print loop variable 5 times in asynchronous way.

    for(var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 5000);// 5 5 5 5 5
}
6. Write a JS code to find the power of a number using for loop
Function numPower() to returns power of number for provided exponential value using for loop.

function numPower(num, pow) {
        var res = 1; //return 1 for pow=0
        for (var i = 0; i < pow; i++) {
            res = res * num;
        }
        return res;
    }
console.log(numPower(4, 3)); //64
console.log(numPower(16, 2)); //256
7. Write a JS code to print a pattern using for loop
Function printPattern() is used to print a pattern for a given range using nested for loop.

function printPattern(range) {
        for (var i = 1; i <= range; i++) {
            var str = "";
            for (var j = 1; j <= i; j++) {
                str += j + " ";
            }
            console.log(str);
        }
    }
printPatter(8);

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */
8. Write a JS code to find the no of digits in a number
Function digitCount() to returns the number of digits in a given number using while loop.

function digitCount(num) {
        var count = 0; //return 1 for pow=0
        while (num != 0) {
            num = Math.floor(num / 10);
            count++;
        }
        return count;
    }
console.log(digitCount(8367)); //4
console.log(digitCount(563349)); //6
9. Write a JS code to calculate the sum of digits in a number
Function digitSum() to returns sum of all digits in a given number using while loop.Learn more about JavaScript built -in Math methods from developer.mozilla.org / Global_Objects / Math

function digitSum(num) {
    var sum = 0;
    while (num != 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(digitSum(4367)); //20
console.log(digitSum(56349)); //27
10. Write a JS code to find the largest number in an array
Program to find the largest number in the given 1D array.
var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
var largest = arr[0];
for (var i = 0; i < arr.length; i++) {
    largest = arr[i] > largest ? arr[i] : largest; //Check largest number
}
console.log(largest) //567
11. Write a JS code to find the number of zeros in 2D Matrix
Program to find count number for zeros in 2d matrix using nested for loops and increment operation.
var arr = [[0, 1, 1], [0, 1, 0], [1, 0, 0]];
var zeroCount = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[0].length; j++) {
        zeroCount = arr[i][j] == 0 ? zeroCount + 1 : zeroCount;
    }
}

console.log(zeroCount) //5
12. Write a JS code to find product of two arrays
Function findProd() to generate a new array which is the product of two arrays of the same size using for loop.

function findProd(arr1, arr2) {
        var arrProd = arr1.length > arr2.length ? arr1 : arr2;
        for (var i = 0; i < Math.min(arr1.length, arr2.length); i++) {
            arrProd[i] = arr1[i] * arr2[i]; //Product of 2 array elements
        }
        return arrProd;
    }
var arr1 = [3, 45, 23, 78, 34];
var arr2 = [4, 2, 34, 4, 12, 1];

console.log(findProd(arr1, arr2)); //[12, 90, 782, 312, 408, 1]
13. Write a JS code to print the Fibonacci series for a given value of N
The function fibonacci() prints the Fibonacci series for the given range N using While loop.

function fibonacci(n) {
    var n1 = 0;
    var n2 = 1;
    var count = 2;
    var n3;
    console.log(n1, n2);
    while (count < n) {
        n3 = n1 + n2;
        console.log(n3); //print current element
        n1 = n2;
        n2 = n3;
        count++;
    }
}

fibonacci(8) //0 1 1 2 3 5 8 13
14. Write a JS code to find N value in the Fibonacci series for a given number
The function Findfibonacci() prints the index of number in the Fibonacci series if present or “element not present” if the number is not part of the Fibonacci series.

function findFibonacci(num) {
    var n1 = 0;
    var n2 = 1;
    var count = 2;
    var n3;
    while (true) {
        n3 = n1 + n2;
        if (n3 == num) {
            console.log(`Element ${num} is present in index ${count}`)
            break;
        }
        else if (n3 > num) {
            console.log("Element not present");
            break;
        }
        n1 = n2;
        n2 = n3;
        count++;
    }
}

findFibonacci(13) //"Element 13 is present in index 7"
findFibonacci(144) //"Element 144 is present in index 12"
15. Write a JS code to count all letters in a word
Program to find the count of all letters in a word using double for loops.

var str = "Suggesting";
var count = new Array(26);
str = str.toLowerCase();
for (var i = 0; i < str.length; i++) {
    if (count[str.charCodeAt(i) - 97]) {
        count[str.charCodeAt(i) - 97]++; // Increment count
    }
    else {
        count[str.charCodeAt(i) - 97] = 1; // Add entry
    }
}
for (var i = 0; i < 26; i++) {
    if (count[i]) {
        console.log(`Character ${i + 'a'} has occured ${count[i]} number of times`);
    }
}
16. Write a JS code to find duplicate values in a given array
Function findDup() to returns all the elements that are repeated more than once in a given array.

function findDup(arr) {
    var arrDup = []
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i && arrDup.indexOf(arr[i]) == -1) {
            arrDup.push(arr[i]);
        }
    }
    return arrDup;
}
var arr = [4, 2, 34, 4, 1, 12, 1, 4];

console.log(findDup(arr)); //[4, 1]
17. Write a JS code for binary search algorithm
Program to find the index of a search element in an array using the binary search algorithm.

var arr = [13, 45, 34, 2, 56, 3, 57, 34, 88, 55];
var key = 57;
var low = 0;
var high = arr.length - 1;
var mid = 0;
var flag = 0;
arr.sort()

console.log("The sorted array is: " + arr); //13,2,3,34,34,45,55,56,57,88

while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (key < arr[mid]) {
        high = mid - 1;
    }
    else if (key > arr[mid]) {
        low = mid + 1;
    }
    else if (key == arr[mid]) {
        flag++;
        console.log("found at index:" + mid); //print the position
        break;
    }
}

if (flag == 0) {
    console.log("Not found"); // Element not present in array
}