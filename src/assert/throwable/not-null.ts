import NotNullType from '../string/not-null.js';
import New from '@alirya/function/new.js';
import Value from '@alirya/value/value.js';

export function NotNullParameters(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject  = ''
) : Error {

    return error(NotNullType.Parameters(value, false, subject));
}

export type NotNullArgument = Value & {
    error ?: (string : string)=>Error,
    subject ?: string
};


export function NotNullParameter(
    {
        value,
        error,
        subject,
    } : NotNullArgument
) : Error {

    return NotNullParameters(value, error, subject);
}


namespace NotNull {
    export const Parameters = NotNullParameters;
    export const Parameter = NotNullParameter;
    export type Argument = NotNullArgument;
}
export default NotNull;
