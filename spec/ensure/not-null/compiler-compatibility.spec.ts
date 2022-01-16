import NotNull from '../../../dist/ensure/not-null';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('union', () => {

    let target : null|number = <any>1;

    let result = NotNull(target);

    let number : number = result;

    // @ts-expecerror
    let undefined : undefined = result;
});

describe('unknown', () => {

    let target : any = 1;

    let result = NotNull(target);

    let undefined : undefined = result;

});
