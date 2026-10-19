// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

const arr = [];
const obj = {};

if (arr.length === 0) {
    console.log('array is empty');
}

if (Object.keys(obj).length === 0) {
    console.log('object is empty');
}

// nullish coalescing operator (??) : null - undefined

let val;

// val = 10 ?? 20;
// val = null ?? 20;
// val = undefined ?? 20;
// val = null ?? 10 ?? 20;
// val = "" ?? 10;
// val = false ?? 10;
// val = true ?? 10;

console.log(val);
