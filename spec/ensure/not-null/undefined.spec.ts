import {NotNullParameters} from '../../../dist/ensure/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    const value = undefined;
    expect(NotNullParameters(value)).toBe(value);

});





