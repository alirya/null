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
