import {NullParameters} from '../../dist/validator/null.js';
import StringMessage from '../../dist/assert/string/null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = NullParameters(StringMessage.Parameters);
        let validatable = validator(<unknown>null);

        if(validatable.valid) {

            // compiler pass
            let string : null = validatable.value;
            expect(string).toBe(null);

        } else {

            // @ts-expect-error
            let string : undefined = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validator = NullParameters(StringMessage.Parameters);
        let validatable = validator({});

        if(validatable.valid) {

            // compiler pass
            let string : null = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            let string : null = validatable.value;
            // @ts-expect-error
            expect(string).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validator = NullParameters(StringMessage.Parameters);
        let validatable = validator('1');

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expect-error
            validatable.value = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expect-error
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validator = NullParameters(StringMessage.Parameters);
    let validatable = validator(null);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(null);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validator = NullParameters(StringMessage.Parameters);
    let validatable = validator(1);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe('string');

});



