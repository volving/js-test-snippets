// Question: 取[2, 32]之间的数字数组
var expect = require('expect');

const LIMIT = 31;

function fn(n) {
    n = parseInt(n);
    if (typeof n === 'number' && !isNaN(n)) {
        if (n > LIMIT) {
            // return `No more than ${LIMIT}!`;
            throw new Error(`No more than ${LIMIT}!`);
        }
        if (n < 1) {
            // return `Non-positive numbers are forbidden!`;
            throw new Error(`Non-positive numbers are forbidden!`);
        }
        var validAmount = 0;
        var obj = {};
        var item = 0;
        var result = [];
        for (; validAmount < n;) {
            item = 2 + parseInt(Math.random() * 31);
            obj[item] = 1;
            result = Object.keys(obj) || [];
            validAmount = result.length;
        }
        return result;
    }
    // return `Input parameter should be a valid number, but "${n}" entered!`;
    throw new Error(`Input parameter should be a valid number, but "${n}" entered!`);
}
/*
console.log(fn(1));
console.log(fn(3));
console.log(fn(31));
console.log(fn(33));
console.log(fn('asd'));
console.log(fn());
*/
var voodoo = 3;

// expect(3).toEqual(3);
// expect(fn.bind(voodoo)).toThrow(/Input parameter should be a valid number, but/);

// expect(function(){
//     throw new Error('boom!');
// }).toThrow(/boom/);
function runNP(n) {
    var array = fn(n);
    return array;
}

function runP(n) {
    var array = fn(n);
    return array.length;
}
/*
describe('numbers', () => {
    describe('Non-positive numbers', () => {
        it('Should throw a Error with "Non-positive numbers are forbidden!" when fn(-1)', () => {
            expect(runNP(-1)).toEqual('Non-positive numbers are forbidden!');
        });
        it('Should throw a Error with "Non-positive numbers are forbidden!" when fn(-parseInt(Math.random()*1000))', () => {
            expect(runNP((-parseInt(Math.random() * 1000)))).toEqual('Non-positive numbers are forbidden!');
        });
        it('Should throw a Error with "Non-positive numbers are forbidden!" when fn(0)', () => {
            expect(runNP(0)).toEqual('Non-positive numbers are forbidden!');
        });
        it('Should throw a Error with "Non-positive numbers are forbidden!" when fn(0.1)', () => {
            expect(runNP(0.1)).toEqual('Non-positive numbers are forbidden!');
        });
    });
    describe('Positive numbers [1, 30]', () => {
        it('Should be 1 when fn(1)', () => {
            expect(runP(1)).toEqual(1);
        });
        it('Should be 3 when fn(3)', () => {
            expect(runP(3)).toEqual(3);
        });
        var val1 = parseInt(Math.random()*31+1);
        it(`Should be ${val1} when fn(${val1})`, () => {
            expect(runP(val1)).toEqual(val1);
        });
    });
    describe('Positive numbers over 30', () => {
        var val2 = Math.random()*1024 + 31;
        it(`Should be No more than ${LIMIT}! when fn(${val2})`, () => {
            expect(runNP(val2)).toEqual(`No more than ${LIMIT}!`);
        });
    });
});
*/


describe('numbers', () => {
    describe('Non-positive numbers', () => {
        it('Should throw a Error with "Non-positive numbers are forbidden!" when fn(0)', () => {
            expect(()=>fn(0)).toThrow(/Non-positive numbers are forbidden!/);
        });
        it('Should throw a Error with "Non-positive numbers are forbidden!" when fn(-1)', () => {
            expect(()=>fn(-1)).toThrow(/Non-positive numbers are forbidden!/);
        });
        it('Should throw a Error with "Non-positive numbers are forbidden!" when fn(-parseInt(Math.random()*1000))', () => {
            expect(()=>fn(-parseInt(Math.random() * 1000))).toThrow(/Non-positive numbers are forbidden!/);
        });
        it('Should throw a Error with "Non-positive numbers are forbidden!" when fn(0.1)', () => {
            expect(()=>fn(0.1)).toThrow(/Non-positive numbers are forbidden!/);
        });
    });
    describe('Positive numbers [1, 30]', () => {
        it('Should be 1 when fn(1)', () => {
            expect(runP(1)).toEqual(1);
        });
        it('Should be 3 when fn(3)', () => {
            expect(runP(3)).toEqual(3);
        });
        var val1 = parseInt(Math.random()*31+1);
        it(`Should be ${val1} when fn(${val1})`, () => {
            expect(runP(val1)).toEqual(val1);
        });
    });
    describe('Positive numbers over 30', () => {
        var val2 = Math.random()*1024 + 31;
        it(`Should be No more than ${LIMIT}! when fn(${val2})`, () => {
            expect(()=>fn(val2)).toThrow(/No more than/);
        });
    });
});
