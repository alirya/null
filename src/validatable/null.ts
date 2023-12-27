import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import NullGuard from '../boolean/null.js';
import Return from '@axiona/validator/validatable/simple.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import {SimpleParameters} from '@axiona/validator/message/function/simple.js';
import NullMessage from '../assert/string/null.js';
import Value from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';
import {ValidatableParameter} from '@axiona/validator/message/function/validatable.js';

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
