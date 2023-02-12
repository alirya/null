import NotNull from '../../../dist/assert/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {

    try {

        const value = undefined;
        NotNull(null);
        expect(value).toBeUndefined();
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});





