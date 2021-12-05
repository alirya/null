import Value from "@dikac/t-value/value";
import NullParameters from "./null-parameters";

export default function NullParameter(
    {
        value,
        error,
    } : Value & {
        error ?: (value:unknown)=>Error
    }
) : null {

    return NullParameters(value, error);
}
