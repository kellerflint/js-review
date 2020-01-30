let input = document.getElementById('input');
let output = document.getElementById('output');

let testArray = [1,'hello', true, 'two', 2];

input.innerHTML = JSON.stringify(testArray);
output.innerHTML = JSON.stringify(sortTypes(testArray));

function sortTypes(input) {
    let string = [];
    let number = [];
    let boolean = [];

    for (let i = 0; i < input.length; i++) {
        typeof input[i] === 'string' ? string.push(input[i]) :
            typeof input[i] === 'number' ? number.push(input[i]) :
                typeof input[i] === 'boolean' ? boolean.push(input[i]) :
                    '';
    }

    return {
        strings: string,
        numbers: number,
        booleans: boolean
    };
}
