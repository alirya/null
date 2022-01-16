import NotNull from '../../../dist/assert/not-null';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {
    NotNull('str');
});

it(`object`, () => {
    NotNull(new String('str'));
});






