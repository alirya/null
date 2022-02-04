import Callback from "@alirya/validator/validatable/callback-function-parameters";
import ValidatableStatic from "@alirya/validator/validatable/static";
import NotNullBoolean from "../boolean/not-null";
import NotNullMessage from "../assert/string/not-null-parameters";
import Static from "@alirya/validator/message/function/static-parameters";
import ValidatableType from "@alirya/validator/validatable/validatable";

export type NotNullParametersReturn<Argument, MessageType> = Readonly<ValidatableStatic<Argument, null, true, false, ValidatableType<Argument | null, MessageType>>>;

export default function NotNullParameters<Argument>(
    value : Argument
) : NotNullParametersReturn<Argument, string>;

export default function NotNullParameters<Argument, MessageType>(
    value : Argument,
    message : Static<Argument, null, true, false, MessageType>
) : NotNullParametersReturn<Argument, MessageType>;

export default function NotNullParameters<Argument, MessageType>(
    value : Argument,
    message : Static<Argument, null, true, false, MessageType|string> = NotNullMessage
) : NotNullParametersReturn<Argument, MessageType> {

    return <NotNullParametersReturn<Argument, MessageType>> Callback(value, NotNullBoolean, message);
}


