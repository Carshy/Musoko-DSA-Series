const myArray = (arr) => {
  // Now, I want to start updating the array
  arr[1] = "100"
  return arr;
}
console.log(myArray(["one", 23, false, 33, true, "banana"]));