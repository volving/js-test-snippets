function tokenizer(raw) {
    let len = raw.length;
    let idx = 0;
    const STRING = /\w/i;
    const SPACE = /[\s,;]/;
    const NUMBER = /[0-9]/;
    const PARAN = /[()]/;
    const BRACKET = /[{}]/;
    const OPERATOR = /[+\-\*\/%]/;
    const ASSIGEMENT = /=/;
    const BIOPERATOR = /\+=|-=|\*=|\/=|==/;
    
    
    let cur = raw[idx];
    let tmp;
    const ret = [];
    
    while (idx < len) {
        cur = raw[ idx ];
        
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
            if (cur === '{') {
                ret.push({ type: 'bracket', value: '{' });
            } else {
                ret.push({ type: 'bracket', value: '}' });
            }
            idx++;
            continue;
        }
        
        // operators: +-*/%, +=, -=, *=, /*, %=
        if (OPERATOR.test(cur)) {
            if(++idx < len) {
                tmp = raw[idx]
                if(cur === tmp || ASSIGEMENT.test(tmp)){
                    ret.push({type: 'operator', value: cur + tmp});
                    idx ++;
                }else {
                    ret.push({type: 'operator', value: cur})
                }
            }
            continue;
        }
        
        // assignment & == equal operator
        if (cur === '=') {
            if (++idx < len) {
                tmp = raw[idx]
                if (tmp === '=') {
                    if (++idx < len) {
                        tmp = raw[idx]
                        if (tmp === '=') {
                            ret.push({type: 'operator', value: '==='})
                        } else {
                            ret.push({type: 'operator', value: '=='})
                        }
                    } else {
                        ret.push({type: 'operator', value: '=='})
                    }
                    
                } else {
                    ret.push({type: 'assignment', value: '='})
                }
            } else {
                ret.push({type: 'assignment', value: '='})
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
                cur += raw[ idx ];
            }
            ret.push({ type: 'string', value: cur });
            continue;
        }

        // space
        while (SPACE.test(cur) && ++idx < len) {
            cur = raw[idx];
        }
    }
    return ret;
}

console.log(tokenizer('function add(a, b) { let c = a+b; b += a; if(c==b) {return a===b;}else {return b}'));
