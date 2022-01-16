import NotNull from "../../../dist/ensure/nonull";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {

    try {

        let value = null;
        expect(NotNull(value)).toBe(value);
        expect(value).toBeUndefined();
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});





