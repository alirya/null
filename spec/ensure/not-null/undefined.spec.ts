import {NotNullParameters} from '../../../dist/ensure/not-null';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    let value = undefined;
    expect(NotNullParameters(value)).toBe(value);

});





