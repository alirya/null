import {CallbackParameters} from '@alirya/validator/validatable/callback';
import ValidatableStatic from '@alirya/validator/validatable/static';
import NotNullBoolean from '../boolean/not-null';
import NotNullMessage from '../assert/string/not-null';
import {StaticParameters} from '@alirya/validator/message/function/static';
import {StaticParameter} from '@alirya/validator/message/function/static';
import ValidatableType from '@alirya/validator/validatable/validatable';

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

