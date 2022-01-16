import NotNull from '../../../dist/assert/not-null';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('union', () => {

    let target : null|number = <any>1;

    NotNull(target);

    let number : number = target;

    // @ts-expecerror
    let null_ : null = target;
});

describe('unknown', () => {

    let target : any = 1;

    NotNull(target);

    let null_ : null = target;

});
