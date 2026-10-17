// object literals

const mySym = Symbol('key1');

const jsUser = {
    name: 'sagar',
    "full_name": 'sagar patil',
    age: 25,
    email: 'sagar@google.com',
    city: 'mumbai',
    isLoggedIn: false,
    [mySym]: 'myKey1'
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full_name"]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = 'sagar@chatgpt.com';
// Object.freeze(jsUser);
// jsUser.email = 'sagar@microsoft.com';
// console.log(jsUser);

jsUser.greeting = function () {
    console.log(`Hey ${this.full_name}`);
}

// console.log(jsUser.greeting());



// singleton -

const tinderUser = new Object();

tinderUser.id = '123abc';
tinderUser.name = 'asdf';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: 'asdfzxcv@test.com',
    fullName: {
        firstName: 'asdf',
        lastName: 'zxcv'
    }
}

// console.log(regularUser.fullName.firstName);

const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
const obj2 = { 4: 'd', 5: 'e' };

// const obj3 = { ...obj1, ...obj2 };
// const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: 'JS',
    price: 999,
    courseInstructor: 'Sagar Patil'
};

const { courseName, courseInstructor: instructor } = course;

console.log(courseName);
console.log(instructor);

