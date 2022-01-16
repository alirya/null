import NotNull from '../../../dist/assert/nonull';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`null`, () => {

    try {

        let value = undefined;
        NotNull(null);
        expect(value).toBeUndefined();
        fail('exception should thrown');

    } catch (e) {

        expect(e).toBeInstanceOf(Error);
    }

});





