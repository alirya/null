import NotNull from '../../../dist/assert/not-null';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    NotNull(1);

});

it(`float`, () => {
    NotNull(1.1);

});

it(`infinity`, () => {

    NotNull(Infinity);

});

it(`Nan`, () => {

    NotNull(NaN);

});

