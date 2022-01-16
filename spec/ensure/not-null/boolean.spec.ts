import NotNull from "../../../dist/ensure/nonull";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

     NotNull(true);
});

it(`false`, () => {

     NotNull(false);
});

