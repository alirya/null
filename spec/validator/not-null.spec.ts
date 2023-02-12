import Validator from '../../dist/validator/not-null.js';
import StringMessage from '../../dist/assert/string/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        const validator = Validator.Parameters(StringMessage.Parameters);
        const validatable = validator(<unknown>{});

        if(validatable.valid) {

            // compiler pass
            const string : unknown = validatable.value;
            // @ts-expect-error
            const nulls : null = validatable.value;
            expect(string).toEqual({});

        } else {

            const nulls : null = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        const validator = Validator.Parameters(StringMessage.Parameters);
        const validatable = validator(null);

        if(validatable.valid) {

            const string : null = validatable.value;
            fail('validatable.valid should false');

        } else {

            const string : null = validatable.value;
            expect(string).toEqual(null);
        }
    });

    it(`readonly`,function() {

        const validator = Validator.Parameters(StringMessage.Parameters);
        const validatable = validator('1');

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

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

    const validator = Validator.Parameters(StringMessage.Parameters);
    const validatable = validator(1);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe('string');
});

it(`invalid`,function() {

    const validator = Validator.Parameters(StringMessage.Parameters);
    const validatable = validator(null);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(null);
    expect(typeof validatable.message).toBe('string');
});



