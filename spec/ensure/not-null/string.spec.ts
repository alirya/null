import NotNull from "../../../dist/ensure/nonull";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {

    let value = 'str';
    expect(NotNull(value)).toBe(value);
});

it(`object`, () => {

    let value = new String('str');
    expect(NotNull(value)).toBe(value);
});






