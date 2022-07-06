import {NullableParameters} from '../../dist/assert/nullable.js';
import Boolean from '@alirya/boolean/assert/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`number`,function() {

    it(`integer`, () => {

        try {
            NullableParameters(1, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`float`, () => {
        try {
            NullableParameters(1.1, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`infinity`, () => {

        try {
            NullableParameters(Infinity, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`Nan`, () => {

        try {
            NullableParameters(NaN, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });
});

describe('boolean', function() {

    it(`true`, () => {
        let value = true;
        expect(NullableParameters(value, Boolean)).toBeUndefined();
        expect(value).toBeTrue();
    });

    it(`false`, () => {
        let value = false;
        expect(NullableParameters(value, Boolean)).toBeUndefined();
        expect(value).toBeFalse();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        try {
            NullableParameters('str', Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`object`, () => {
        try {
            NullableParameters(new String('str'), Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('object', function() {

    it(`plain`, () => {
        try {
            NullableParameters({}, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`instance`, () => {
        try {
            NullableParameters(new Map(), Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        try {
            NullableParameters(function () {}, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`anonymous arrow`, () => {
        try {
            NullableParameters(()=>{}, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`named`, () => {
        try {
            NullableParameters(isNaN, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});


it(`null `, () => {

    let value = null;
    expect(NullableParameters(value, Boolean)).toBeUndefined();
    expect(value).toBeNull();
});

it(`undefined`, () => {
    try {
        NullableParameters(undefined, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





