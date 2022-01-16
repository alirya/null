import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import Validator from "@alirya/validator/validator";
export declare type Type<MessageType> = Validator<unknown, null, true, false>;
export default function NotNullParameters<Argument>(value: Argument): Type<string, Argument>;
export default function NotNullParameters<Argument, MessageType>(value: Argument, message: (result: Readonly<Value<Argument> & Validatable>) => MessageType): Type<Argument, MessageType>;
//# sourceMappingURL=not-null-parameters.d.ts.map