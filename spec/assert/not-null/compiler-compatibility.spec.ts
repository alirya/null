import NotNull from '../../../dist/assert/not-null';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    let target : null|number = <any>1;

    NotNull(target);

    let number : number = target;

    // @ts-expect-error
    let null_ : null = target;
});

it('unknown', () => {

    let target : any = 1;

    NotNull(target);

    let null_ : null = target;

});
