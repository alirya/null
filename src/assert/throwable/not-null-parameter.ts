import NotNullType from "../string/not-null-parameters";
import New from "@dikac/t-function/new";
import Value from "@dikac/t-value/value";
import NotNullParameters from "./not-null-parameters";

export default function NotNullParameter(
    {
        value,
        error,
        subject,
    } : Value & {
        error ?: (string : string)=>Error,
        subject ?: string
    }
) : Error {

    return NotNullParameters(value, error, subject);
}
