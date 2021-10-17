import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NullValidatable from "../validatable/null";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
import NullMessage from "../validatable/string/null";

export default function Null() : Validator<unknown, null, Readonly<Instance<unknown, string>>>

export default function Null<MessageType>(
    message : (result:Readonly<Value & Validatable>)=>MessageType
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>

export default function Null<MessageType>(
    message : (result:Readonly<Value & Validatable>)=>MessageType|string = NullMessage
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>> {

    return function <
        Type extends null,
        Argument extends unknown
    >(
        value : Type|Argument
    ) {

        return NullValidatable(value, message);

    } as Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>
}
