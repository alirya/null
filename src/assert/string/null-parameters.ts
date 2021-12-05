import ReplaceParameters from "@dikac/t-array/replace-parameters";

/**
 * string intended for null message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function NullParameters(
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

    strings.push('null');

    if(!valid) {

        ReplaceParameters(strings, 2, v=>v + ',')

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}

