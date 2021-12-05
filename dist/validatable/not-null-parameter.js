import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import NotNullBoolean from "../boolean/not-null";
import NotNullMessage from "../assert/string/not-null-parameters";
export default function NotNullParameters(value, message = NotNullMessage) {
    return Callback(value, NotNullBoolean, message);
}
//# sourceMappingURL=not-null-parameter.js.map