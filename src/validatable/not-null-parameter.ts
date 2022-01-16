import Callback from "@alirya/validator/validatable/callback-function-parameters";
import NotNullBoolean from "../boolean/not-null";
import NotNullMessage from "../assert/string/not-null-parameters";
import Static from "@alirya/validator/message/function/static-parameters";
import {NotNullParametersType} from "./not-null-parameters";

export type {NotNullParametersType};

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


