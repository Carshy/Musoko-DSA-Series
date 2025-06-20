// Write a program that prints a staircase of size n.

const stairCase = (n) => {
  
  if(n <= 0) {
    console.log(`Invalid input: n has to be a positive interger. in your case ${n} is not a positive interger`)
    return;
  }
  //   outer loop, we are going to handle the rows
  for(let i = 1; i <= n; i++) {
    let row = '';

    // the first nested loop should add spaces
    for(let j = 0; j < n - i; j++) {
        row += ' ';
    }
    // the second nested loop adds hashes
    for(let k = 0; k < i; k++) {
        row += '#'
    }
    console.log(row)

  }
}
stairCase(4);