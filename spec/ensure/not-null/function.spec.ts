import {NotNullParameters} from '../../../dist/ensure/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    const value = function () {};
    expect(NotNullParameters(value)).toBe(value);
});

it(`anonymous arrow`, () => {
   const value = ()=>{};
    expect(NotNullParameters(value)).toBe(value);
});

it(`named`, () => {
    const value = isNaN;
    expect(NotNullParameters(value)).toBe(value);
});








