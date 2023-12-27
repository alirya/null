import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import ValidatableStatic from '@axiona/validator/validatable/static.js';
import NotNullBoolean from '../boolean/not-null.js';
import NotNullMessage from '../assert/string/not-null.js';
import {StaticParameters} from '@axiona/validator/message/function/static.js';
import {StaticParameter} from '@axiona/validator/message/function/static.js';
import ValidatableType from '@axiona/validator/validatable/validatable.js';

export type NotNullReturn<Argument, MessageType> = Readonly<ValidatableStatic<Argument, null, true, false, MessageType>>;

export function NotNullParameters<Argument>(
    value : Argument
) : NotNullReturn<Argument, string>;

export function NotNullParameters<Argument, MessageType>(
    value : Argument,
    message : StaticParameters<Argument, null, true, false, MessageType>
) : NotNullReturn<Argument, MessageType>;

export function NotNullParameters<Argument, MessageType>(
    value : Argument,
    message : StaticParameters<Argument, null, true, false, MessageType|string> = NotNullMessage.Parameters
) : NotNullReturn<Argument, MessageType> {

    return <NotNullReturn<Argument, MessageType>> CallbackParameters(value, NotNullBoolean, message);
}

export type NotNullArgument<Argument, MessageType> = {
    value : Argument,
    message : StaticParameter<Argument, null, true, false, MessageType>
};

export function NotNullParameter<Argument>(
    value : Argument
) : NotNullReturn<Argument, string>;

export function NotNullParameter<Argument, MessageType>(
    value : Argument,
    message : StaticParameter<Argument, null, true, false, MessageType>
) : NotNullReturn<Argument, MessageType>;

export function NotNullParameter<Argument, MessageType>(
    value : Argument,
    message : StaticParameter<Argument, null, true, false, MessageType|string> = NotNullMessage.Parameter
) : NotNullReturn<Argument, MessageType> {

    return <NotNullReturn<Argument, MessageType>> CallbackParameters(value, NotNullBoolean, message);
}


namespace NotNull {
    export const Parameters = NotNullParameters;
    export const Parameter = NotNullParameter;
}
export default NotNull;

