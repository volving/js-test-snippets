// begin: Core---
let cascades = [];
let cur = 0;
let prev = 0;
const results = [];
function checkCascade() {
    let local = cascades[cur] || 0;
    cascades[cur] = ++local;
    if (prev === cur || prev > cur) {
        cascades = cascades.splice(0, cur + 1)
    }
    prev = cur;
    results.push(cascades.join('.'));
}
// end: Core---


const fs = require('fs');
const readline = require('readline');
async function processLineByLine() {
    const fileStream = fs.createReadStream('file.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    for await (const line of rl) {
        cur = Math.ceil((line.length - line.trimLeft().length) / 4);
        checkCascade();
    }
    console.log(results);
}


processLineByLine();