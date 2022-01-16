import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import Return from "@alirya/validator/validatable/simple";
import Instance from "@alirya/validator/validatable/validatable";
export default function NullParameter<Argument>(value: Argument): Return<unknown, Argument, null, Readonly<Instance<unknown, string>>>;
export default function NullParameter<MessageType, Argument>(value: Argument, message: (result: Readonly<Value<Argument> & Validatable>) => MessageType): Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>>;
//# sourceMappingURL=null-parameter.d.ts.map