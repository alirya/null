import Guard from '../boolean/null';
import Callback from '@alirya/function/callback/callback';

export function NullableParameters<Alternative>(
    value : unknown,
    assert : (value:unknown) => asserts value is Alternative,
    error ?: (value:unknown)=>Error
) : asserts value is (null|Alternative) {

    try {

        if(!Guard(value)) {

            assert(value);
        }

    } catch (e) {

        if(error) {

            throw error(value);
        }

        throw e;
    }

}

export type NullableArgument<Alternative> = Callback<(value:unknown) => asserts value is Alternative> & {
    error ?: (value:unknown)=>Error
};

export function NullableParameter<Alternative>(
    value,
    {
        callback,
        error,
    } : NullableArgument<Alternative>
) : asserts value is null|Alternative {

    return NullableParameters(value, callback, error);
}

namespace Nullable {
    export const Parameters = NullableParameters;
    export const Parameter = NullableParameter;
    export type Argument<Alternative> = NullableArgument<Alternative>;
}
export default Nullable;
