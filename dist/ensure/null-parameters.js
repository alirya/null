import AssertNull from "../assert/null";
import NullError from "../assert/throwable/null-parameters";
export default function NullParameters(value, error = NullError) {
    AssertNull(value, error);
    return value;
}
//# sourceMappingURL=null-parameters.js.map