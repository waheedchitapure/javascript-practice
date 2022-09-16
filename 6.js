




// 6. Write a JS code to find the power of a number using for loop
// Function numPower() to returns power of number for provided exponential value using for loop.


// function printPattern(range) {
//     for(var i=1;i<=range;i++){
//       var str="";
//       for(var j=1;j<=i;j++){
//         str +=   +" ";
      
//       }
//       console.log(str);
//     }
//   }
//   printPattern(8);


n=5
var num = 1
for(let i=1;i<=n;i++){
    var str="";
    for(var j=1;j<=i;j++){
        str += num++  +" ";
        if (num == 8){
            break
        }
        
        
    }

      
    
    console.log(str)
}