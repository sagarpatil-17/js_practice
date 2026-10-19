// reduce 

const myNumbers = [1, 2, 3, 4, 5];

// const myTotal = myNumbers.reduce(function (acc, currVal) {
//     console.log(`acc - ${acc} and currVal - ${currVal}`);

//     return acc + currVal
// }, 0)

// const myTotal = myNumbers.reduce((acc, currVal) => acc + currVal, 0);

const myTotal = myNumbers.reduce((acc, currVal) => {
    return acc + currVal
}, 0);

// console.log(myTotal);

const myCourses = [
    { courseName: 'js', price: '1000' },
    { courseName: 'node js', price: '2000' },
    { courseName: 'css', price: '500' },
    { courseName: 'angular', price: '1500' },
];

const totalCoursesPrice = myCourses.reduce((acc, item) => acc + Number(item.price), 0);
console.log(totalCoursesPrice);

