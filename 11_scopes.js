// scopes in js

// var c = 300;
let a = 100;

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;

    // console.log('inner', a);
}

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username = 'sagar';

    function two() {
        const website = 'youtube';
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();


if (true) {
    const username = 'sagar';

    if (username === 'sagar') {
        const website = ' youtube';
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);



// example 

// console.log(addOne(5));

function addOne(num1) {
    return num1 + 5
}

// addTwo(10);

const addTwo = function (num) {
    return num + 10
}


