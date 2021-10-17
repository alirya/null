import Callback from "@dikac/t-validator/validatable/callback";
import NotNullBoolean from "../boolean/not-null";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotNullMessage from "./string/not-null";

export type Return<MessageType, Argument> =
    Readonly<Validatable<false> & Message<MessageType> & Value<null>> |
    Readonly<Validatable<true> & Message<MessageType> & Value<Argument>>;

export default function NotNull<Argument>(
    value : Argument
) : Return<string, Argument>;

export default function NotNull<MessageType, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType
) : Return<MessageType, Argument>;

export default function NotNull<MessageType, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType|string = NotNullMessage
) : Return<MessageType, Argument> {

    return <Return<MessageType, Argument>> Callback(value, NotNullBoolean, message);
}


