import AssertNotNull from '../assert/not-null.js';
import NotNullError from '../assert/throwable/not-null.js';
import {Union} from 'ts-toolbelt';
import Value from '@alirya/value/value.js';

export function NotNullParameters<Type>(
    value : Type,
    error : (value:unknown)=>Error = NotNullError.Parameters
) : Union.Exclude<Type, null>  {

    AssertNotNull(value, error);

    return value;
}

export type NotNullArgument<Type> = Value<Type> & {
    error ?: (value:unknown)=>Error
};

export function NotNullParameter<Type>(
    {
        error,
        value
    } : NotNullArgument<Type>
) : Union.Exclude<Type, null>  {

    return NotNullParameters(value, error);
}


namespace NotNull {
    export const Parameters = NotNullParameters;
    export const Parameter = NotNullParameter;
    export type Argument<Type> = NotNullArgument<Type>;
}
export default NotNull;
