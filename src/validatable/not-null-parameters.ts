import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import ValidatableStatic from "@dikac/t-validator/validatable/static";
import NotNullBoolean from "../boolean/not-null";
import NotNullMessage from "../assert/string/not-null-parameters";
import Static from "@dikac/t-validator/message/function/static-parameters";
import ValidatableType from "@dikac/t-validator/validatable/validatable";

export type NotNullParametersType<Argument, MessageType> = Readonly<ValidatableStatic<Argument, null, true, false, ValidatableType<Argument | null, MessageType>>>;

export default function NotNullParameters<Argument>(
    value : Argument
) : NotNullParametersType<Argument, string>;

export default function NotNullParameters<Argument, MessageType>(
    value : Argument,
    message : Static<Argument, null, true, false, MessageType>
) : NotNullParametersType<Argument, MessageType>;

export default function NotNullParameters<Argument, MessageType>(
    value : Argument,
    message : Static<Argument, null, true, false, MessageType|string> = NotNullMessage
) : NotNullParametersType<Argument, MessageType> {

    return <NotNullParametersType<Argument, MessageType>> Callback(value, NotNullBoolean, message);
}


