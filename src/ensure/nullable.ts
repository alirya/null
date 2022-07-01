import {NullableParameters as AssertNullableParameters} from '../assert/nullable';
import Value from '@alirya/value/value';
import Callback from '@alirya/function/callback/callback';

export function NullableParameters<Alternative>(
    value : unknown,
    ensure : (value:unknown)=>asserts value is Alternative,
    error ?: (value:unknown)=>Error
) : Alternative|null {

    AssertNullableParameters(value, ensure, error);

    return value as Alternative|null ;
}

export type NullableArgument<Alternative> = Value & Callback<(value:unknown) => asserts value is Alternative> & {
    error ?: (value:unknown)=>Error
};

export function NullableParameter<Alternative>(
    {
        value,
        callback,
        error,
    } : NullableArgument<Alternative>
) : Alternative|null {

    return NullableParameters(value, callback, error);
}


namespace Nullable {
    export const Parameters = NullableParameters;
    export const Parameter = NullableParameter;
}
export default Nullable;
