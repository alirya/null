import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import NullGuard from "../boolean/null";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import NullMessage from "../assert/string/null-parameter";
import Message from "@dikac/t-message/message";
import ValidatableMessage from "@dikac/t-validator/message/function/validatable-parameter";

export default function NullParameter<Argument>(
    {
        value
    } : Value<Argument>
) : Return<Argument, null, Readonly<Instance<Argument, string>>>;

export default function NullParameter<MessageType, Argument>(
    {
        value,
        message,
    } : Value<Argument> & Message<ValidatableMessage<Argument, MessageType>>
) : Return<Argument, null, Readonly<Instance<Argument, MessageType>>>;

export default function NullParameter<MessageType, Argument>(
    {
        value,
        message = NullMessage,
    } : Value<Argument> & Message<ValidatableMessage<Argument, MessageType|string>>
) : Return<Argument, null, Readonly<Instance<Argument, MessageType>>> {

    return <Return<Argument, null, Readonly<Instance<Argument, MessageType>>>> Callback(value, NullGuard, message);
}
