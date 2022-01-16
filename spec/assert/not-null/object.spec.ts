import NotNull from "../../../dist/assert/nonull";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {
    NotNull({});
});

it(`instance`, () => {
    NotNull(new Map());
});


