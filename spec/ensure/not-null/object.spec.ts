import {NotNullParameters} from '../../../dist/ensure/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {

    const value = {};
    expect(NotNullParameters(value)).toBe(value);
});

it(`instance`, () => {

    const value = new Map();
    expect(NotNullParameters(value)).toBe(value);
});


