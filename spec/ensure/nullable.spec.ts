import {NullableParameters} from '../../dist/ensure/nullable.js';
import {BooleanParameters} from '@alirya/boolean/ensure/boolean.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`number`,function() {

    it(`integer`, () => {

        try {
            NullableParameters(1, BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`float`, () => {
        try {
            NullableParameters(1.1, BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`infinity`, () => {

        try {
            NullableParameters(Infinity, BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`Nan`, () => {

        try {
            NullableParameters(NaN, BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });
});

describe('boolean', function() {

    it(`true`, () => {
        let value = true;
        expect(NullableParameters(value, BooleanParameters)).toBeTrue();
    });

    it(`false`, () => {
        let value = false;
        expect(NullableParameters(value, BooleanParameters)).toBeFalse();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        try {
            NullableParameters('str', BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`object`, () => {
        try {
            NullableParameters(new String('str'), BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('object', function() {

    it(`plain`, () => {
        try {
            NullableParameters({}, BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`instance`, () => {
        try {
            NullableParameters(new Map(), BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        try {
            NullableParameters(function () {}, BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`anonymous arrow`, () => {
        try {
            NullableParameters(()=>{}, BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`named`, () => {
        try {
            NullableParameters(isNaN, BooleanParameters);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});


it(`null `, () => {

    let value = null;
    NullableParameters(value, BooleanParameters);
    expect(value).toBeNull();
});

it(`undefined`, () => {
    try {
        NullableParameters(undefined, BooleanParameters);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





