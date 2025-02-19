const snakeTitle = (str) => {
    let wordStr = str.replace(/_/g, ' ').toLowerCase()
    return wordStr.replace(/\b\w/g, (match) => match.toUpperCase())


}
console.log(snakeTitle("empoyee_salary_sheet"));