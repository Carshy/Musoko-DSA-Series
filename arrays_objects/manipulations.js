const myArray = (arr) => {
  // Now, I want to sum up all numbers in the array
  let cur = 0;
  let results = []
  for(let i = 0; i < arr.length; i++) {
    cur += arr[i]
  }
  return cur;
 
  
}
console.log(myArray([2, 23, 3, 33, 9, 10]));