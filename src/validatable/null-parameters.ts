import Callback from "@alirya/validator/validatable/callback-function-parameters";
import NullGuard from "../boolean/null";
import Return from "@alirya/validator/validatable/simple";
import Instance from "@alirya/validator/validatable/validatable";
import Dynamic from "@alirya/validator/message/function/simple-parameters";
import NullMessage from "../assert/string/null-parameters";

export default function NullParameters<Argument>(
    value : Argument
) : Return<Argument, null, Readonly<Instance<Argument, string>>>;

export default function NullParameters<MessageType, Argument>(
    value : Argument,
    message : Dynamic</*unknown,*/ Argument, null, MessageType>
) : Return<Argument, null, Readonly<Instance<Argument, MessageType>>>;

export default function NullParameters<MessageType, Argument>(
    value : Argument,
    message : Dynamic</*unknown,*/ Argument, null, MessageType|string> = NullMessage
) : Return<Argument, null, Readonly<Instance<Argument, MessageType>>> {

    return <Return<Argument, null, Readonly<Instance<Argument, MessageType>>>> Callback(value, NullGuard, message);
}
