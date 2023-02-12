import NotNull from '../../../dist/ensure/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {

    try {

        const value = null;
        expect(NotNull.Parameters(value)).toBe(value);
        expect(value).toBeUndefined();
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }
});





