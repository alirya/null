import {NotNullParameters} from '../../../dist/ensure/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {

    const value = 'str';
    expect(NotNullParameters(value)).toBe(value);
});

it(`object`, () => {

    const value = new String('str');
    expect(NotNullParameters(value)).toBe(value);
});






