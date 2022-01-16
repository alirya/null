import Guard from '../boolean/null';
import AssertNullableParameters from '../assert/nullable-parameters';
import Value from '@alirya/value/value';
import Callback from '@alirya/function/callback/callback';
import NullableParameters from './nullable-parameters';

export default function NullableParameter<Alternative>(
    {
        value,
        callback,
        error,
    } : Value & Callback<(value:unknown) => asserts value is Alternative> & {
        error ?: (value:unknown)=>Error
    }
) : Alternative|null {

    return NullableParameters(value, callback, error);
}
