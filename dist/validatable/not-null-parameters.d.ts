import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Validator from "@dikac/t-validator/validator";
export declare type Type<MessageType> = Validator<unknown, null, true, false>;
export default function NotNullParameters<Argument>(value: Argument): Type<string, Argument>;
export default function NotNullParameters<Argument, MessageType>(value: Argument, message: (result: Readonly<Value<Argument> & Validatable>) => MessageType): Type<Argument, MessageType>;
