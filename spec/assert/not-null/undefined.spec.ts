import NotNull from '../../../dist/assert/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    const value = undefined;
    NotNull(value);

});





