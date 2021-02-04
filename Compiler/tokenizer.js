// 不支持 conditional
function tokenizer(raw) {
    let len = raw.length;
    let idx = 0;
    const STRING = /\w/i;
    const SPACE = /[\s,;]/;
    const NUMBER = /[0-9]/;
    const PARAN = /[()]/;
    const CURLY = /[{}]/;
    const BRACKET = /[\[\]]/;
    const OPERATOR = /[+\-\*\/%]/;
    const ASSIGEMENT = /=/;
    const BIOPERATOR = /\+=|-=|\*=|\/=|==/;

    let cur = raw[idx];
    let tmp;
    const ret = [];

    while (idx < len) {
        cur = raw[idx];

        // paranthesis, parantheses(plural)
        if (PARAN.test(cur)) {
            if (cur === '(') {
                ret.push({ type: 'paran', value: '(' });
            } else {
                ret.push({ type: 'paran', value: ')' });
            }
            idx++;
            continue;
        }
        if (BRACKET.test(cur)) {
            if (cur === '[') {
                ret.push({ type: 'bracket', value: '[' });
            } else {
                ret.push({ type: 'bracket', value: ']' });
            }
            idx++;
            continue;
        }
        if (CURLY.test(cur)) {
            if (cur === '{') {
                ret.push({ type: 'curly', value: '{' });
            } else {
                ret.push({ type: 'curly', value: '}' });
            }
            idx++;
            continue;
        }

        // operators: +-*/%, +=, -=, *=, /*, %=
        if (OPERATOR.test(cur)) {
            if (++idx < len) {
                tmp = raw[idx];
                if (cur === tmp || ASSIGEMENT.test(tmp)) {
                    ret.push({ type: 'operator', value: cur + tmp });
                    idx++;
                } else {
                    ret.push({ type: 'operator', value: cur });
                }
            }
            continue;
        }

        // assignment & == equal operator
        if (cur === '=') {
            if (++idx < len) {
                tmp = raw[idx];
                if (tmp === '=') {
                    if (++idx < len) {
                        tmp = raw[idx];
                        if (tmp === '=') {
                            ret.push({ type: 'operator', value: '===' });
                        } else {
                            ret.push({ type: 'operator', value: '==' });
                        }
                    } else {
                        ret.push({ type: 'operator', value: '==' });
                    }
                } else {
                    ret.push({ type: 'assignment', value: '=' });
                }
            } else {
                ret.push({ type: 'assignment', value: '=' });
            }
            continue;
        }

        // number
        if (NUMBER.test(cur)) {
            while (++idx < len && NUMBER.test(raw[idx])) {
                cur += raw[idx];
            }
            ret.push({ type: 'number', value: cur });
            continue;
        }
        // string
        if (STRING.test(cur)) {
            while (++idx < len && STRING.test(raw[idx])) {
                cur += raw[idx];
            }
            ret.push({ type: 'string', value: cur });
            if ('.' === raw[ idx++ ]) {
                ret.push({
                    type: 'member',
                    value: '.'
                });
            }
            continue;
        }

        // space
        while (SPACE.test(cur) && ++idx < len) {
            cur = raw[idx];
        }
    }
    return ret;
}





console.log(tokenizer('function add(a, b) { let c = a+b; b += a; let results = []; results.push(a); if(c==b) {return a===b;} else {return b}'));

/*
[
    { type: 'string', value: 'function' },
    { type: 'string', value: 'add' },
    { type: 'string', value: 'a' },
    { type: 'string', value: 'b' },
    { type: 'curly', value: '{' },
    { type: 'string', value: 'let' },
    { type: 'string', value: 'c' },
    { type: 'assignment', value: '=' },
    { type: 'string', value: 'a' },
    { type: 'string', value: 'b' },
    { type: 'string', value: 'b' },
    { type: 'operator', value: '+=' },
    { type: 'string', value: 'a' },
    { type: 'string', value: 'let' },
    { type: 'string', value: 'results' },
    { type: 'assignment', value: '=' },
    { type: 'bracket', value: '[' },
    { type: 'bracket', value: ']' },
    { type: 'string', value: 'results' },
    { type: 'member', value: '.' },
    { type: 'string', value: 'push' },
    { type: 'string', value: 'a' },
    { type: 'string', value: 'if' },
    { type: 'string', value: 'c' },
    { type: 'assignment', value: '=' },
    { type: 'string', value: 'b' },
    { type: 'curly', value: '{' },
    { type: 'string', value: 'return' },
    { type: 'string', value: 'a' },
    { type: 'operator', value: '==' },
    { type: 'string', value: 'b' },
    { type: 'curly', value: '}' },
    { type: 'string', value: 'else' },
    { type: 'curly', value: '{' },
    { type: 'string', value: 'return' },
    { type: 'string', value: 'b' }
]

*/

/*
## categories

### String
1. keyword: function, return, new
2. function name
3. var, let, const
4. if-else, switch-case-default
5. for, for-in, for-of, while, do-while

### parentheses
1. normal splitor
2. function call: CallExpression

### curly brackets
1. BlockStatement

### 
*/
