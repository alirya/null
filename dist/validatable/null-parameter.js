import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import NullGuard from "../boolean/null";
import NullMessage from "../assert/string/null-parameter";
export default function NullParameter({ value, message = NullMessage, }) {
    return Callback(value, NullGuard, message);
}
//# sourceMappingURL=null-parameter.js.map