import {NotNullParameters} from '../../../dist/ensure/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    let value = 1;
    expect(NotNullParameters(value)).toBe(value);
});

it(`float`, () => {

    let value = 1.1;
    expect(NotNullParameters(value)).toBe(value);
});

it(`infinity`, () => {

    let value = Infinity;
    expect(NotNullParameters(value)).toBe(value);
});

it(`Nan`, () => {

    let value = NaN;
    expect(NotNullParameters(value)).toEqual(value);
});

