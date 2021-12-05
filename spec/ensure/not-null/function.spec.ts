import NotNull from "../../../dist/ensure/not-null-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    let value = function () {};
    expect(NotNull(value)).toBe(value);
});

it(`anonymous arrow`, () => {
   let value = ()=>{};
    expect(NotNull(value)).toBe(value);
});

it(`named`, () => {
    let value = isNaN;
    expect(NotNull(value)).toBe(value);
});








