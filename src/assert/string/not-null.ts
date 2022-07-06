import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
/**
 * string intended for not null message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export function NotNullParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value,
) : string {

    const strings: string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('not null');

    return strings.join(' ') + '.';
}



export type NotNullArgument = Value & Validatable & {
    subject ?: string,
    conversion ?: (value:unknown)=>string
};


/**
 * string intended for null message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export function NotNullParameter(
    {
        value,
        valid,
        subject,
        conversion,
    } : NotNullArgument
) : string {

    return NotNullParameters(value, valid, subject, conversion);
}



namespace NotNull {
    export const Parameters = NotNullParameters;
    export const Parameter = NotNullParameter;
    export type Argument = NotNullArgument;
}
export default NotNull;
