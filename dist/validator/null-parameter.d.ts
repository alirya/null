import Validator from "@alirya/validator/simple";
import Instance from "@alirya/validator/validatable/validatable";
import Simplest from "@alirya/validator/message/function/simplesparameter";
export default function NullParameter(): Validator<unknown, null, Readonly<Instance<unknown, string>>>;
export default function NullParameter<MessageType>(message: Simplest<unknown, null, MessageType>): Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>;
//# sourceMappingURL=null-parameter.d.ts.map