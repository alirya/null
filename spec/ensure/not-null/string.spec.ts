import {NotNullParameters} from '../../../dist/ensure/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`primitive`, () => {

    let value = 'str';
    expect(NotNullParameters(value)).toBe(value);
});

it(`object`, () => {

    let value = new String('str');
    expect(NotNullParameters(value)).toBe(value);
});






