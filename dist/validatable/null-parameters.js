import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import NullGuard from "../boolean/null";
import NullMessage from "../assert/string/null-parameters";
export default function NullParameters(value, message = NullMessage) {
    return Callback(value, NullGuard, message);
}
//# sourceMappingURL=null-parameters.js.map