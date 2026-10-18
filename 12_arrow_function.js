// arrow functions

const user = {
    name: 'sagar',
    age: 25,

    welcomeMessage: function () {
        console.log(this);

        return `${this.name}, welcome to website!`
    }
}

// console.log(user.welcomeMessage());
// user.name = 'john';
// console.log(user.welcomeMessage());

// console.log(this);

// function myFun(){
//     console.log(this);
// }

// myFun()

// basic arrow function 
// const myFun2 = () => {
//     console.log('arrow function called!');
// }

// implicit arrow function 
const myFun2 = () => 'arrow function called!';

console.log(myFun2());
