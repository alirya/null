import NotNull from '../../../dist/assert/nonull';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

     NotNull(true);
});

it(`false`, () => {

     NotNull(false);
});

