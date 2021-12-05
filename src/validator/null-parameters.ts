import Validator from "@dikac/t-validator/simple";
import NullValidatable from "../validatable/null-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import NullMessage from "../assert/string/null-parameters";
import Simplest from "@dikac/t-validator/message/function/simple-parameters";
import Simple from "@dikac/t-validator/message/function/simple-parameters";

export default function NullParameters() : Validator<unknown, null, Readonly<Instance<unknown, string>>>

export default function NullParameters<MessageType>(
    message : Simplest<unknown, null, MessageType>
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>

export default function NullParameters<MessageType>(
    message :  Simple<unknown, null, MessageType|string> = NullMessage
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return NullValidatable(value, message);

    } as Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>
}
