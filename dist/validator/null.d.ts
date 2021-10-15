import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Null<MessageType>(message: (result: Readonly<Value & Validatable>) => MessageType): Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>;
