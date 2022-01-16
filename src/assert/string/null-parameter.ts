import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import NullParameters from "./null-parameters";

/**
 * string intended for null message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function NullParameter(
    {
        value,
        valid,
        subject,
        conversion,
    } : Value & Validatable & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : string {

    return NullParameters(value, valid, subject, conversion);
}

