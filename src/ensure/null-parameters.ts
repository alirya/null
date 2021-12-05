import AssertNull from "../assert/null";
import NullError from "../assert/throwable/null-parameters";

export default function NullParameters(
    value : unknown,
    error : (value:unknown)=>Error = NullError
) : null {

    AssertNull(value, error);

    return value;
}
