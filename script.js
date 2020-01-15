for (let x, i = 1; i <= 100; i++) {
    i % 5 === 0 && i % 3 === 0 ? x = "Hee Haw!" : i % 3 === 0 ? x = "Hee!" : i % 5 === 0 ? x = "Haw!" : x = i;
    console.log(x);
