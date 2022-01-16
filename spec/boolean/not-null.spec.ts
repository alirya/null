import NotNull from "../../dist/boolean/nonull";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let a : unknown = '1';

    if(NotNull(a)) {

        // @ts-expecerror
        let n : null = a;

    } else {

        // @ts-expecerror
        let n : null = a;
    }

});

describe(`number`,function() {

    it(`integer`, () => {
        expect(NotNull(1)).toBeTrue();
    });

    it(`float`, () => {
        expect(NotNull(1.1)).toBeTrue();
    });

    it(`infinity`, () => {
        expect(NotNull(Infinity)).toBeTrue();
    });

    it(`Nan`, () => {
        expect(NotNull(NaN)).toBeTrue();
    });
});

describe("boolean", function() {

    it(`true`, () => {
        expect(NotNull(true)).toBeTrue();
    });

    it(`false`, () => {
        expect(NotNull(false)).toBeTrue();
    });

});

describe("string", function() {

    it(`primitive`, () => {
        expect(NotNull('str')).toBeTrue();
    });

    it(`object`, () => {
        expect(NotNull(new String('str'))).toBeTrue();
    });

});

describe("object", function() {

    it(`plain`, () => {
        expect(NotNull({})).toBeTrue();
    });

    it(`instance`, () => {
        expect(NotNull(new Map())).toBeTrue();
    });

});

describe("function", function() {

    it(`anonymous `, () => {
        expect(NotNull(function () {})).toBeTrue();
    });

    it(`anonymous arrow`, () => {
        expect(NotNull(()=>{})).toBeTrue();
    });

    it(`named`, () => {
        expect(NotNull(isNaN)).toBeTrue();
    });

});

describe("empty", function() {

    it(`null `, () => {
        expect(NotNull(null)).toBeFalse();
    });

    it(`undefined`, () => {
        expect(NotNull(undefined)).toBeTrue();
    });

});





