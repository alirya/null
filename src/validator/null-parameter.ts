import Validator from "@alirya/validator/simple";
import Instance from "@alirya/validator/validatable/validatable";
import NullMessage from "../assert/string/null-parameter";
import Simplest from "@alirya/validator/message/function/simple-parameter";
import NullParameters from "./null-parameters";

export default function NullParameter() : Validator<unknown, null, Readonly<Instance<unknown, string>>>

export default function NullParameter<MessageType>(
    message : Simplest<unknown, null, MessageType>
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>

export default function NullParameter<MessageType>(
    message :  Simplest<unknown, null, MessageType|string> = NullMessage
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType|string>>> {

    return NullParameters((value, valid) => message({value, valid}));
}
