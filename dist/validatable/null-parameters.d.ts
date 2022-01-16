import Return from "@alirya/validator/validatable/simple";
import Instance from "@alirya/validator/validatable/validatable";
import Dynamic from "@alirya/validator/message/function/simple-parameters";
export default function NullParameters<Argument>(value: Argument): Return<unknown, Argument, null, Readonly<Instance<unknown, string>>>;
export default function NullParameters<MessageType, Argument>(value: Argument, message: Dynamic</*unknown,*/ Argument, null, MessageType>): Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>>;
//# sourceMappingURL=null-parameters.d.ts.map