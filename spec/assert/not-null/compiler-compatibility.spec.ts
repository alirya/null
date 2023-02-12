import NotNull from '../../../dist/assert/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('union', () => {

    const target : null|number = <any>1;

    NotNull(target);

    const number : number = target;

    // @ts-expect-error
    const null_ : null = target;
});

it('unknown', () => {

    const target : any = 1;

    NotNull(target);

    const null_ : null = target;

});
