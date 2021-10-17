import Callback from "@dikac/t-validator/validatable/callback";
import NullGuard from "../boolean/null";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function Null<MessageType, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType
) : Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>> {

    return <Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>>> Callback(value, NullGuard, message);
}
