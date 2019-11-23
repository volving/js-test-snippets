const {exec} = require('child_process');
const fs = require('fs');
const path = require('path');

const p = path.resolve(__dirname, '../assets/');
console.log(p);

let dir = fs.readdirSync(p);
let rule = /([\w\.-_]*).tar.gz$/;

dir.forEach(file => {
  if (rule.test(file)) {
    let cmd = 'tar -xzf ' + path.resolve(p, file) + ' -C ' + path.resolve(__dirname, '../dist');
    console.log(cmd)
    exec(cmd);
  }
});
