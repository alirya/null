import NotNull from "../../../dist/ensure/nonull";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    let value = 1;
    expect(NotNull(value)).toBe(value);
});

it(`float`, () => {

    let value = 1.1;
    expect(NotNull(value)).toBe(value);
});

it(`infinity`, () => {

    let value = Infinity;
    expect(NotNull(value)).toBe(value);
});

it(`Nan`, () => {

    let value = NaN;
    expect(NotNull(value)).toEqual(value);
});

