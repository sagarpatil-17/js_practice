// foreach loop

const skills = ['html', 'css', 'js', 'angular', 'react', 'node'];

// skills.forEach(function (s) {
//     console.log(s);
// })

// skills.forEach((s) => {
//     console.log(s);
// })

// function printMe(item) {
//     console.log(item);
// }

// skills.forEach(printMe)

// skills.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const mySkills = [
    { skillName: 'html' },
    { skillName: 'css' },
    { skillName: 'js' },
    { skillName: 'node' },
];

mySkills.forEach((item)=>{
    console.log(item.skillName);
})