


// 3. Write a JS code to print Even numbers in given array
// Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator.


// const arr = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

var arr = [[1, 2],[[3, 4],[5, 6]]]


// let newArry = arr.flat(Infinity)
// console.log( newArry)

const print = (arr)=>{
    for(let i = 0; i< arr.length; i++){
        
        
        for (let j=0; j<arr[0].length;j++){

           

                console.log(arr[i][j])
            



            // if(arr[i][j] % 2 == 0){
            // }
            
        }
    }
}

// let arr = [1,[2,[3,[4,[5,[6,7],8],9],10]]]  
print(arr)


