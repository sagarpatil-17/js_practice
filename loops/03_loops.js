// for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}


// Maps
const map = new Map();
map.set('in', 'india');
map.set('us', 'united states of america');
map.set('fr', 'france');

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} - ${value}`);
}

const myObj = {
    game1: 'cs',
    game2: 'ff',
    game3: 'coc'
}

// this loop will not work on objects

// for (const item of myObj) {
//     console.log(item);
// }


// for - in loop 

// for (const key in myObj) {
//     console.log(key);
// }

for (const key in myObj) {
    console.log(myObj[key]);
}