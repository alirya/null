import Callback from "@alirya/validator/validatable/callback-function-parameters";
import NotNullBoolean from "../boolean/not-null";
import NotNullMessage from "../assert/string/not-null-parameters";
import Static from "@alirya/validator/message/function/static-parameters";
import {NotNullParametersReturn as NotNullParameterReturn} from "./not-null-parameters";

export type {NotNullParameterReturn};

export default function NotNullParameters<Argument>(
    value : Argument
) : NotNullParameterReturn<Argument, string>;

export default function NotNullParameters<Argument, MessageType>(
    value : Argument,
    message : Static<Argument, null, true, false, MessageType>
) : NotNullParameterReturn<Argument, MessageType>;

export default function NotNullParameters<Argument, MessageType>(
    value : Argument,
    message : Static<Argument, null, true, false, MessageType|string> = NotNullMessage
) : NotNullParameterReturn<Argument, MessageType> {

    return <NotNullParameterReturn<Argument, MessageType>> Callback(value, NotNullBoolean, message);
}


