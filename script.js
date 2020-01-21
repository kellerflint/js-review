console.log("---Bad input (string)---");
heeHaw("bad_input");
console.log("---Bad input (negative)---");
heeHaw(-1);
console.log("---zero---");
heeHaw(0);
console.log("---200---");
heeHaw(200);

function heeHaw(input) {
    if (!Number.isInteger(input) || input < 0) {
        console.log("invalid param");
    } else {
        for (let x, i = 1; i <= input; i++) {
            i % 5 === 0 && i % 3 === 0 ? x = "Hee Haw!" : i % 3 === 0 ? x = "Hee!" : i % 5 === 0 ? x = "Haw!" : x = i;
            console.log(x);
        }
    }
}
