import Nullable from "../../dist/assert/nullable-parameters";
import Boolean from "@alirya/boolean/assert/boolean";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`number`,function() {

    it(`integer`, () => {

        try {
            Nullable(1, Boolean)
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`float`, () => {
        try {
            Nullable(1.1, Boolean)
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`infinity`, () => {

        try {
            Nullable(Infinity, Boolean)
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`Nan`, () => {

        try {
            Nullable(NaN, Boolean)
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });
});

describe("boolean", function() {

    it(`true`, () => {
        let value = true;
        expect(Nullable(value, Boolean)).toBeUndefined();
        expect(value).toBeTrue();
    });

    it(`false`, () => {
        let value = false;
        expect(Nullable(value, Boolean)).toBeUndefined();;
        expect(value).toBeFalse();
    });

});

describe("string", function() {

    it(`primitive`, () => {
        try {
            Nullable('str', Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`object`, () => {
        try {
            Nullable(new String('str'), Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe("object", function() {

    it(`plain`, () => {
        try {
            Nullable({}, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`instance`, () => {
        try {
            Nullable(new Map(), Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});

describe("function", function() {

    it(`anonymous `, () => {
        try {
            Nullable(function () {}, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`anonymous arrow`, () => {
        try {
            Nullable(()=>{}, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`named`, () => {
        try {
            Nullable(isNaN, Boolean);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

});


it(`null `, () => {

    let value = null;
    expect(Nullable(value, Boolean)).toBeUndefined();
    expect(value).toBeNull();
});

it(`undefined`, () => {
    try {
        Nullable(undefined, Boolean);
        fail('exception should thrown');
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
    }
});





