// staircase challenge
const stairCase = (n) => {
  for(let i = n; i >= 1; i--) {
    let spaces = ' '.repeat(n - i);
    let hashes = '#'.repeat(i);
    console.log(spaces + hashes);
  }
}
stairCase(4)

