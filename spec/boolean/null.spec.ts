import Null from '../../dist/boolean/null.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    let a : unknown = '1';

    if(Null(a)) {

        let n : null = a;

    } else {

        // @ts-expect-error
        let n : null = a;
    }

});

describe(`number`,function() {

    it(`integer`, () => {
        expect(Null(1)).toBeFalse();
    });

    it(`float`, () => {
        expect(Null(1.1)).toBeFalse();
    });

    it(`infinity`, () => {
        expect(Null(Infinity)).toBeFalse();
    });

    it(`Nan`, () => {
        expect(Null(NaN)).toBeFalse();
    });
});

describe('boolean', function() {

    it(`true`, () => {
        expect(Null(true)).toBeFalse();
    });

    it(`false`, () => {
        expect(Null(false)).toBeFalse();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        expect(Null('str')).toBeFalse();
    });

    it(`object`, () => {
        expect(Null(new String('str'))).toBeFalse();
    });

});

describe('object', function() {

    it(`plain`, () => {
        expect(Null({})).toBeFalse();
    });

    it(`instance`, () => {
        expect(Null(new Map())).toBeFalse();
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        expect(Null(function () {})).toBeFalse();
    });

    it(`anonymous arrow`, () => {
        expect(Null(()=>{})).toBeFalse();
    });

    it(`named`, () => {
        expect(Null(isNaN)).toBeFalse();
    });

});

describe('empty', function() {

    it(`null `, () => {
        expect(Null(null)).toBeTrue();
    });

    it(`undefined`, () => {
        expect(Null(undefined)).toBeFalse();
    });

});





