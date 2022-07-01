import {NotNullParameters} from '../../../dist/ensure/not-null';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`plain`, () => {

    let value = {};
    expect(NotNullParameters(value)).toBe(value);
});

it(`instance`, () => {

    let value = new Map();
    expect(NotNullParameters(value)).toBe(value);
});


