import NullType from '../string/null.js';
import New from '@alirya/function/new.js';
import Value from '@alirya/value/value.js';

export function NullParameters(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject  = ''
) : Error {

    return error(NullType.Parameters(value, false, subject));
}

export type NullArgument = Value & {
    error ?: (string : string)=>Error,
    subject ?: string
};

export function NullParameter(
    {
        value,
        error,
        subject,
    } : NullArgument
) : Error {

    return NullParameters(value, error, subject);
}


namespace Null {
    export const Parameters = NullParameters;
    export const Parameter = NullParameter;
    export type Argument = NullArgument;
}
export default Null;
