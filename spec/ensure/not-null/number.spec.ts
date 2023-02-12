import {NotNullParameters} from '../../../dist/ensure/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`integer`, () => {

    const value = 1;
    expect(NotNullParameters(value)).toBe(value);
});

it(`float`, () => {

    const value = 1.1;
    expect(NotNullParameters(value)).toBe(value);
});

it(`infinity`, () => {

    const value = Infinity;
    expect(NotNullParameters(value)).toBe(value);
});

it(`Nan`, () => {

    const value = NaN;
    expect(NotNullParameters(value)).toEqual(value);
});

