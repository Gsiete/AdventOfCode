const fs = require('node:fs')

const wholeInput = fs.readFileSync('./input-a3.txt').toString();
// console.log(input);
const process = (partInput) => {
    const matches = partInput.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g);
    // console.log(matches);
    return [...matches].reduce((acc, el) => acc + +el[1] * +el[2], 0);
};

const processAll = () => wholeInput.split('do()').reduce((acc, part) => acc + process(part.split('don\'t()')[0]), 0);

console.log(process(wholeInput));
console.log(processAll());