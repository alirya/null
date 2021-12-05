import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Simplest from "@dikac/t-validator/message/function/simple-parameters";
export default function NullParameters(): Validator<unknown, null, Readonly<Instance<unknown, string>>>;
export default function NullParameters<MessageType>(message: Simplest<unknown, null, MessageType>): Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>;
