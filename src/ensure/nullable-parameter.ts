import Value from "@dikac/t-value/value";
import Callback from "@dikac/t-function/callback/callback";
import NullableParameters from "./nullable-parameters";

export default function NullableParameter<Alternative>(
    {
        value,
        callback,
        error,
    } : Value & Callback<(value:unknown) => asserts value is Alternative> & {
        error ?: (value:unknown)=>Error
    }
) : Alternative|null {

    return NullableParameters(value, callback, error)
}
