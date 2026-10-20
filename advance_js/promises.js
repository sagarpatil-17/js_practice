// promises

// const promiseOne = new Promise(function (resolve, reject) {
//     // do an async task
//     setTimeout(function () {
//         console.log('The async task is complete!');
//         resolve();
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log('promise consumed!');
// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('async task 2');
//         resolve()
//     }, 2000)
// }).then(() => {
//     console.log('task 2 resolved!');
// })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('promise 3 complete');
//         resolve({ name: 'sagar', age: 25 })
//     }, 1000)
// })

// promiseThree.then((user) => {
//     console.log(user);
// })


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ name: 'test', email: 'test@google.com' })
//         } else {
//             reject('error: something went wrong!')
//         }
//     }, 2000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.name;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('the promise is either resoled or rejected!');
// })


// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ courseName: 'js', price: 999 })
//         } else {
//             reject('error: something went wrong!')
//         }
//     }, 2000)
// })

// const consumePromise = async () => {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise()


// api call 
// const getDataFromApi = async () => {
//     try {
//         const response = await fetch('https://raw.githubusercontent.com/sagarpatil-17/music-app/refs/heads/main/musicapi.json');
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log('E: ', err);
//     }
// }

// getDataFromApi()


fetch('https://raw.githubusercontent.com/sagarpatil-17/music-app/refs/heads/main/musicapi.json')
    .then((response) => {
        const data = response.json();
        return data;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log('E ', error);
    })
    .finally(() => {
        console.log('this promise is either resolved or rejected');
    });