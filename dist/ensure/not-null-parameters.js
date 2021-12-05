import AssertNotNull from "../assert/not-null";
import NotNullError from "../assert/throwable/not-null-parameters";
export default function NotNullParameters(value, error = NotNullError) {
    AssertNotNull(value, error);
    return value;
}
//# sourceMappingURL=not-null-parameters.js.map