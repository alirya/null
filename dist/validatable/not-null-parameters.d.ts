import ValidatableStatic from "@dikac/t-validator/validatable/static";
import Static from "@dikac/t-validator/message/function/static-parameters";
import ValidatableType from "@dikac/t-validator/validatable/validatable";
export declare type NotNullParametersType<Argument, MessageType> = Readonly<ValidatableStatic<Argument, null, true, false, ValidatableType<Argument | null, MessageType>>>;
export default function NotNullParameters<Argument>(value: Argument): NotNullParametersType<Argument, string>;
export default function NotNullParameters<Argument, MessageType>(value: Argument, message: Static<Argument, null, true, false, MessageType>): NotNullParametersType<Argument, MessageType>;
