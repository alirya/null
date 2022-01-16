import Callback from "@alirya/validator/validatable/callback-function-parameters";
import NotNullBoolean from "../boolean/nonull";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import Value from "@alirya/value/value";
import NotNullMessage from "./string/nonull";
import Validator from "@alirya/validator/validator";
//
// export type Return<MessageType, Argument> =
//     Readonly<Validatable<false> & Message<MessageType> & Value<null>> |
//     Readonly<Validatable<true> & Message<MessageType> & Value<Argument>>;

export type Type<MessageType> = Validator<unknown, null, true, false>;

export default function NotNullParameters<Argument>(
    value : Argument
) : Type<string, Argument>;

export default function NotNullParameters<Argument, MessageType>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType
) : Type<Argument, MessageType>;

export default function NotNullParameters<Argument, MessageType>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType|string = NotNullMessage
) : Type<Argument, MessageType> {

    return <Type<Argument, MessageType>> Callback(value, NotNullBoolean, message);
}


