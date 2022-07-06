import NotNull from '../../../dist/assert/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    let value = undefined;
    NotNull(value);

});





