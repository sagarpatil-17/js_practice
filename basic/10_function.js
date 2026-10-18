// functions

function myFunction() {
    console.log('Function called!');
}

// myFunction();

function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2)
    return num1 + num2
}

const result = addTwoNumbers(4, 5);
// console.log(result)

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in!`
// }

function loginUserMessage(username = 'user') {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in!`
}

// console.log(loginUserMessage('Sagar'));
// console.log(loginUserMessage());

// functions with rest parameters
function calculateCartPrice(...nums) {
    return nums
}

// console.log(calculateCartPrice(100, 200, 200));


// functions with objects 
const user = {
    username: 'sagar',
    age: 25
}

function handleObj(anyObj) {
    console.log(`username is ${anyObj.username} and user age is ${anyObj.age}`);
}

// handleObj(user);
// handleObj({
//     username: 'sagar',
//     age: 25
// });