// filter 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 5)

// const newNums = myNums.filter((num) => {
//   return  num > 5
// })

const newNums = [];

myNums.forEach((num) => {
    if (num > 5) {
        newNums.push(num)
    }
})

// console.log(newNums);


// map 
const myNumbers = [1, 2, 3, 4, 5];
const newNumber = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 30)
    // .reduce((acc, currVal) => acc + currVal, 0)

console.log(newNumber);
