import AssertNotNull from "../assert/nonull";
import NotNullError from "../assert/throwable/nonull-parameters";
export default function NotNullParameters(value, error = NotNullError) {
    AssertNotNull(value, error);
    return value;
}
//# sourceMappingURL=not-null-parameters.js.map