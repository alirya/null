import {CallbackParameters} from '@alirya/validator/validatable/callback.js';
import NullGuard from '../boolean/null.js';
import Return from '@alirya/validator/validatable/simple.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {SimpleParameters} from '@alirya/validator/message/function/simple.js';
import NullMessage from '../assert/string/null.js';
import Value from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';

export function NullParameters<Argument>(
    value : Argument
) : Return<Argument, null, Readonly<Instance<Argument, string>>>;

export function NullParameters<MessageType, Argument>(
    value : Argument,
    message : SimpleParameters</*unknown,*/ Argument, null, MessageType>
) : Return<Argument, null, Readonly<Instance<Argument, MessageType>>>;

export function NullParameters<MessageType, Argument>(
    value : Argument,
    message : SimpleParameters</*unknown,*/ Argument, null, MessageType|string> = NullMessage.Parameters
) : Return<Argument, null, Readonly<Instance<Argument, MessageType>>> {

    return <Return<Argument, null, Readonly<Instance<Argument, MessageType>>>> CallbackParameters(value, NullGuard, message);
}


export function NullParameter<Argument>(
    {
        value
    } : Value<Argument>
) : Return<Argument, null, Readonly<Instance<Argument, string>>>;

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
) : Return<Argument, null, Readonly<Instance<Argument, MessageType>>> {

    return <Return<Argument, null, Readonly<Instance<Argument, MessageType>>>> CallbackParameters(value, NullGuard, message);
}


namespace Null {
    export const Parameters = NullParameters;
    export const Parameter = NullParameter;
}
export default Null;
