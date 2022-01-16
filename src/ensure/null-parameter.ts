import AssertNull from "../assert/null";
import NullError from "../assert/throwable/null-parameters";
import Value from "@alirya/value/value";
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
