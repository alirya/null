import NotNull from '../../../dist/ensure/not-null-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

     NotNull(true);
});

it(`false`, () => {

     NotNull(false);
});

