import Validator from "@alirya/validator/simple";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import Value from "@alirya/value/value";
import NullValidatable from "../validatable/null-parameters";
import Instance from "@alirya/validator/validatable/validatable";
import Return from "@alirya/validator/validatable/simple";
import NullMessage from "../assert/string/null-parameter";
import Simplest from "@alirya/validator/message/function/simplesparameter";
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
