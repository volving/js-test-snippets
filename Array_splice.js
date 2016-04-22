var cmd = ['node', 'npmg'];

console.log(cmd.splice(1, 1, 'npm', '-g'));
console.log(cmd);



var cc = ['sudo', 'node', 'npmgs'];

cc.splice(2,1, 'npm', ['-g', '-s']);

console.log(cc);