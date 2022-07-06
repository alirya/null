import NotNull from '../../../dist/assert/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    NotNull(function () {});
});

it(`anonymous arrow`, () => {
   NotNull(()=>{});
});

it(`named`, () => {
    NotNull(isNaN);
});








