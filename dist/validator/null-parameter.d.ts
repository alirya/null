import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Simplest from "@dikac/t-validator/message/function/simple-parameter";
export default function NullParameter(): Validator<unknown, null, Readonly<Instance<unknown, string>>>;
export default function NullParameter<MessageType>(message: Simplest<unknown, null, MessageType>): Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>;
