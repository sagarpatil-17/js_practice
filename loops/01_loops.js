// for loop

for (let i = 0; i <= 10; i++) {
    const result = i;

    if (result === 5) {
        // console.log('5 printed');
    }

    // console.log(result);
}

for (let i = 1; i <= 10; i++) {
    // console.log('outer loop - ', i);

    for (let j = 1; j <= 10; j++) {
        // console.log('inner loop - ', j);

        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

let games = ['coc', 'ff', 'codm', 'bgmi', 'cs'];

for (let i = 0; i < games.length; i++) {
    // console.log(games[i]);
}

//break and continue
for (let i = 0; i < games.length; i++) {

    if (games[i] === 'codm') {
        break
    }

    console.log(games[i]);
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log('5 detected!')

        continue
    }
    console.log(i)
}