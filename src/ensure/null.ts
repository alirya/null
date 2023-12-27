import AssertNull from '../assert/null.js';
import NullError from '../assert/throwable/null.js';
import Value from '@axiona/value/value.js';

export function NullParameters(
    value : unknown,
    error : (value:unknown)=>Error = NullError.Parameters
) : null {

    AssertNull(value, error);

    return value;
}

export type NullArgument = Value & {
    error ?: (value:unknown)=>Error
};

export function NullParameter(
    {
        value,
        error,
    } : NullArgument
) : null {

    return NullParameters(value, error);
}


namespace Null {
    export const Parameters = NullParameters;
    export const Parameter = NullParameter;
    export type Argument = NullArgument;
}
export default Null;
