/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function kk(arr, ...ps){
    for(let i of arr){
        console.log(i);
    }
    for(let i of ps){
        console.log(i);
    }
    console.log('ok');
}

kk`Hello, ${3+3} You're so ${9}`;