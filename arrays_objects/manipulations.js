const myArray = (arr) => {
  // Now, I want to sort the array elements in a an ascending order
  return arr.filter(el => el % 2 !== 0)
  
}
console.log(myArray([2, 23, 3, 33, 9, 10, 100]));