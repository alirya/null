import { ReplaceParameters } from '@alirya/array/replace.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';

/**
 * string intended for null message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export function NullParameters(
    value : unknown,
    valid : boolean,
    subject  = 'type',
    conversion : (value:unknown)=>string = value=>typeof value,
) : string {

    const strings: string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('null');

    if(!valid) {

        ReplaceParameters(strings, 2, v=>v + ',');

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}


export type NullArgument = Value & Validatable & {
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
export function NullParameter(
    {
        value,
        valid,
        subject,
        conversion,
    } : NullArgument
) : string {

    return NullParameters(value, valid, subject, conversion);
}



namespace Null {
    export const Parameters = NullParameters;
    export const Parameter = NullParameter;
    export type Argument = NullArgument;
}
export default Null;
