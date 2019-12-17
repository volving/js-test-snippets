/*globals describe, it*/
let baseTS = Date.now();
let local = {
    id: 1000000000000,
    name: 'project-1',
    ts: baseTS - 2000,
    children: [
        {
            id: 100000000,
            name: 'scene-1',
            children: [
                {
                    id: 100000,
                    name: 'shot-1',
                    children: [{ id: 1000, name: 'take-1' }]
                },
                {
                    id: 200000,
                    name: 'shot-2',
                    children: [{ id: 1000, name: 'take-1' }]
                }
            ]
        }
    ]
};

/* let remote = {
    id: 1000000000000,
    name: 'project-1',
    ts: baseTS - 1000,
    tsmod: baseTS,
    mag: 'project',
    children: [
        {
            id: 100000000,
            name: 'scene-1',
            mag: 'scene',
            children: [
                {
                    id: 100000,
                    name: 'shot-1',
                    pm: 'shut-up',
                    children: [{ id: 1000, name: 'take-1' }]
                },
                {
                    id: 200000,
                    name: 'shot-2',
                    children: [
                        { id: 1000, name: 'take-1' },
                        { id: 2000, name: 'take-2' }
                    ]
                }
            ]
        },
        {
            id: 200000000,
            name: 'scene-2',
            children: [
                {
                    id: 100000,
                    name: 'shot-1',
                    children: [{ id: 1000, name: 'take-1' }]
                }
            ]
        }
    ]
}; */

const assert = require('assert');
const { traversGet } = require('../ObjectDiffPatch/TraversGet');
let obj = null;

describe('traversGet', function() {
    this.beforeEach('', function() {
        obj = Object.assign({}, local);
    });
    describe('single part', function() {
        it('# id', function() {
            assert(traversGet(obj, 'id') === obj.id);
        });
        it('# name', function() {
            assert(traversGet(obj, 'name') === obj.name);
        });
    });
    describe('double parts', function() {
        it('# children.0', function() {
            assert(traversGet(obj, 'children.0') === obj.children[0]);
        });
        it('# children.1', function() {
            assert(traversGet(obj, 'children.1') === obj.children[1]);
        });
    });
    describe('multiple parts', function() {
        it('# children.0.id', function() {
            assert(traversGet(obj, 'children.0.id') === obj.children[0].id);
        });
        it('# children.1.name', function() {
            assert(
                traversGet(obj, 'children.0.children.0.name') ===
                    obj.children[0].children[0].name
            );
        });
    });
});

describe('PickAttributes', function () {
    describe('void list', function () {

    })

});
