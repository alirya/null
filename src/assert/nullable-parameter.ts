import Guard from '../boolean/null';
import Value from '@alirya/value/value';
import Callback from '@alirya/function/callback/callback';
import NullableParameters from './nullable-parameters';

export default function NullableParameter<Alternative>(
    value,
    {
        callback,
        error,
    } : Callback<(value:unknown) => asserts value is Alternative> & {
        error ?: (value:unknown)=>Error
    }
) : asserts value is null|Alternative {

    return NullableParameters(value, callback, error);

}
