import NullType from "../string/null-parameters";
import New from "@dikac/t-function/new";
import Value from "@dikac/t-value/value";
import NullParameters from "./null-parameters";

export default function NullParameter(
    {
        value,
        error,
        subject,
    } : Value & {
        error ?: (string : string)=>Error,
        subject ?: string
    }
) : Error {

    return NullParameters(value, error, subject);
}
