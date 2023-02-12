import Nullable from '../../dist/boolean/nullable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    const a : unknown = '1';

    if(Nullable(a, Array.isArray)) {

        const n : null|any[] = a;

    } else {

        // @ts-expect-error
        const n : null|any[] = a;
    }

});

describe('valid', () => {

    it('value', () => {

        expect(Nullable<Array<any>>([], Array.isArray )).toBe(true);
    });

    it('undefined', () => {

        expect(Nullable<Array<any>>(null, Array.isArray )).toBe(true);
    });

});

describe('invalid', () => {

    it('value', () => {

        expect(Nullable<Array<any>>(1, Array.isArray )).toBe(false);
    });

});


