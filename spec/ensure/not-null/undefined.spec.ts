import NotNull from '../../../dist/ensure/nonull';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`undefined `, () => {

    let value = undefined;
    expect(NotNull(value)).toBe(value);

});





