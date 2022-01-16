import Validator from "../../dist/validator/nonull";
import StringMessage from "../../dist/validatable/string/nonull";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = Validator(StringMessage);
        let validatable = validator(<unknown>{});

        if(validatable.valid) {

            // compiler pass
            let string : unknown = validatable.value;
            // @ts-expecerror
            let nulls : null = validatable.value;
            expect(string).toEqual({});

        } else {

            let nulls : null = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validator = Validator(StringMessage);
        let validatable = validator(null);

        if(validatable.valid) {

            let string : null = validatable.value;
            fail('validatable.valid should false')

        } else {

            let string : null = validatable.value;
            expect(string).toEqual(null);
        }
    });

    it(`readonly`,function() {

        let validator = Validator(StringMessage);
        let validatable = validator('1');

        try {
            // @ts-expecerror
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expecerror
        validatable.value = true;

        try {
            // @ts-expecerror
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validator = Validator(StringMessage);
    let validatable = validator(1);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe("string");
});

it(`invalid`,function() {

    let validator = Validator(StringMessage);
    let validatable = validator(null);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(null);
    expect(typeof validatable.message).toBe("string");
});



