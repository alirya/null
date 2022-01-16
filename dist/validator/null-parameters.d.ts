import Validator from "@alirya/validator/simple";
import Instance from "@alirya/validator/validatable/validatable";
import Simplest from "@alirya/validator/message/function/simplesparameters";
export default function NullParameters(): Validator<unknown, null, Readonly<Instance<unknown, string>>>;
export default function NullParameters<MessageType>(message: Simplest<unknown, null, MessageType>): Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>;
//# sourceMappingURL=null-parameters.d.ts.map