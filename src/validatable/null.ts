import {CallbackParameters} from '@alirya/validator/validatable/callback';
import NullGuard from '../boolean/null';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import {SimpleParameters} from '@alirya/validator/message/function/simple';
import NullMessage from '../assert/string/null';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';

export function NullParameters<Argument>(
    value : Argument
) : Return<Argument, null, string>;

export function NullParameters<MessageType, Argument>(
    value : Argument,
    message : SimpleParameters</*unknown,*/ Argument, null, MessageType>
) : Return<Argument, null, MessageType>;

export function NullParameters<MessageType, Argument>(
    value : Argument,
    message : SimpleParameters</*unknown,*/ Argument, null, MessageType|string> = NullMessage.Parameters
) : Return<Argument, null, MessageType> {

    return <Return<Argument, null, MessageType>> CallbackParameters(value, NullGuard, message);
}


export function NullParameter<Argument>(
    {
        value
    } : Value<Argument>
) : Return<Argument, null, string>;

export function NullParameter<MessageType, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageType>>
) : Return<Argument, null, Readonly<Instance<Argument, MessageType>>>;

export function NullParameter<MessageType, Argument>(
    {
        value,
        message = NullMessage.Parameter,
    } : Value<Argument> & Message<ValidatableParameter<Argument, MessageType|string>>
) : Return<Argument, null, MessageType> {

    return <Return<Argument, null, MessageType>> CallbackParameters(value, NullGuard, message);
}


namespace Null {
    export const Parameters = NullParameters;
    export const Parameter = NullParameter;
}
export default Null;
