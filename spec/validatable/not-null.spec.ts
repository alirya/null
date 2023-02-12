import Validatable from '../../dist/validatable/not-null.js';
import StringMessage from '../../dist/assert/string/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        const validatable = Validatable.Parameters(<unknown>{}, StringMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            const string : unknown = validatable.value;
            expect(string).toEqual({});

        } else {

            const string : null = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        const validatable = Validatable.Parameters(<unknown>null, StringMessage.Parameters);

        if(validatable.valid) {

            // @ts-expect-error
            const string : null = validatable.value;
            fail('validatable.valid should false');

        } else {


            const string : null = validatable.value;
            expect(string).toEqual(null);
        }
    });

    it(`readonly`,function() {

        const validatable = Validatable.Parameters(<unknown>1, StringMessage.Parameters);

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

    const validatable = Validatable.Parameters(null, StringMessage.Parameters);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(null);
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    const validatable = Validatable.Parameters(11, StringMessage.Parameters);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(11);
    expect(typeof validatable.message).toBe('string');

});



