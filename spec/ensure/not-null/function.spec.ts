import {NotNullParameters} from '../../../dist/ensure/not-null';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`anonymous `, () => {
    let value = function () {};
    expect(NotNullParameters(value)).toBe(value);
});

it(`anonymous arrow`, () => {
   let value = ()=>{};
    expect(NotNullParameters(value)).toBe(value);
});

it(`named`, () => {
    let value = isNaN;
    expect(NotNullParameters(value)).toBe(value);
});








