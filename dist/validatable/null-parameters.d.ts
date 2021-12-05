import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/simple-parameters";
export default function NullParameters<Argument>(value: Argument): Return<Argument, null, Readonly<Instance<Argument, string>>>;
export default function NullParameters<MessageType, Argument>(value: Argument, message: Dynamic</*unknown,*/ Argument, null, MessageType>): Return<Argument, null, Readonly<Instance<Argument, MessageType>>>;
