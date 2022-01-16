import NotNull from '../../../dist/assert/not-null';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

     NotNull(true);
});

it(`false`, () => {

     NotNull(false);
});

