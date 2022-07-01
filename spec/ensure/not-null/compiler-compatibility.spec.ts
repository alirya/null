import NotNull from '../../../dist/ensure/not-null';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    let target : null|number = <any>1;

    let result = NotNull.Parameters(target);

    let number : number = result;

    // @ts-expect-error
    let undefined : undefined = result;
});

it('unknown', () => {

    let target : any = 1;

    let result = NotNull.Parameters(target);

    let undefined : undefined = result;

});
