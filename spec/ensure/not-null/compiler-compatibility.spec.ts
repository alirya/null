import NotNull from '../../../dist/ensure/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    const target : null|number = <any>1;

    const result = NotNull.Parameters(target);

    const number : number = result;

    // @ts-expect-error
    const undefined : undefined = result;
});

it('unknown', () => {

    const target : any = 1;

    const result = NotNull.Parameters(target);

    const undefined : undefined = result;

});
