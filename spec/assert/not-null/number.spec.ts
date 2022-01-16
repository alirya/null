import NotNull from '../../../dist/assert/nonull';

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

