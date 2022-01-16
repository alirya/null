import Value from "@alirya/value/value";
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
