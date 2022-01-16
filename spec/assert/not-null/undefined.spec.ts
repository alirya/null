import NotNull from "../../../dist/assert/nonull";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    let value = undefined;
    NotNull(value);

});





