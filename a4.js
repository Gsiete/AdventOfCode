const fs = require('node:fs')

const wholeInput = fs.readFileSync('./input-a4.txt').toString();
// console.log(input);
const process = () => {
    const lines = wholeInput.split('\n');
    const H = lines.length;
    const W = lines[0].length;
    const linesToCheck = [...lines];
    const diagsN2SE = []
    for (let i = 0; i < W-3; i++) {
        diagsN2SE[i] = [];
        for (let j = 0; j < W-i && j < H; j++) {
            // console.log(i, diagsN2SE[i])
            diagsN2SE[i].push(lines[j][j + i]);
        }
    }
    const diagsW2SE = []
    for (let i = 1; i < H-3; i++) {
        diagsW2SE[i] = [];
        for (let j = 0; j < H-i && j < W; j++) {
            diagsW2SE[i].push(lines[j + i][j]);
        }
    }
    const diagsN2SW = []
    for (let i = 0; i < W-3; i++) {
        diagsN2SW[i] = [];
        for (let j = 0; j < W-i && j < H; j++) {
            diagsN2SW[i].push(lines[j][W - 1 - (j + i)]);
        }
    }
    const diagsE2SW = []
    for (let i = 1; i < H-3; i++) {
        diagsE2SW[i] = [];
        for (let j = 0; j < H-i && j < W; j++) {
            diagsE2SW[i].push(lines[j + i][W - 1 - j]);
        }
    }
    const verts = []
    for (let i = 1; i < W; i++) {
        verts[i] = [];
        for (let j = 0; j < H; j++) {
            verts[i].push(lines[j][i]);
        }
    }
    linesToCheck.push(...[...diagsN2SE, ...diagsN2SW, ...diagsE2SW, ...diagsW2SE, ...verts].filter(Boolean).map((arr) => arr.filter(Boolean).join('')));
    const sum = linesToCheck.reduce((acc, el) => acc + (el.match(/XMAS/g)?.length ?? 0) + (el.match(/SAMX/g)?.length ?? 0), 0);
    // console.log(matches);
    console.log(sum);
    // return [...matches].reduce((acc, el) => acc + +el[1] * +el[2], 0);
};

// const processAll = () => wholeInput.split('do()').reduce((acc, part) => acc + process(part.split('don\'t()')[0]), 0);

console.log(process(wholeInput));
// console.log(processAll());