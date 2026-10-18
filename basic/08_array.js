// array

const myArr = [0, 1, 2, 3, 4, 5];
const games = ['coc', 'bgmi', 'ff', 'codm'];
const myArr2 = new Array(1, 2, 3, 4);

// array methods

// myArr.push(6, 7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// slice, splice

// console.log('A ', myArr);

const myn1 = myArr.slice(1, 3);

// console.log(myn1)
// console.log('B ', myArr);

const myn2 = myArr.splice(1, 3);
// console.log(myn2);
// console.log('C ', myArr);


const mGames = ['coc', 'bgmi', 'ff', 'codm'];
const pGames = ['cs', 'pubg-pc', 'valo', 'minecraft'];

// mGames.push(pGames);
// console.log(mGames);

// const allGames = mGames.concat(pGames)
// console.log(allGames);

const allNewGames = [...mGames, ...pGames];
// console.log(allNewGames);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);


// console.log(Array.isArray('sagar'));
// console.log(Array.from('sagar'));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

