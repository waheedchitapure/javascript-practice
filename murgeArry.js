


  let arr = [1,[2,[3,[4,[5,[6,7],8],9],10]]]


  let newarry = arr.toString().split(','); 
for(let i=0;i<newarry.length;i++)
  newarry[i]=parseInt(newarry[i]);

console.log(newarry)
