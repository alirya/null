import NotNull from "../../../dist/ensure/nonull";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {

    let value = {};
    expect(NotNull(value)).toBe(value);
});

it(`instance`, () => {

    let value = new Map();
    expect(NotNull(value)).toBe(value);
});


