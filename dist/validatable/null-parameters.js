import Callback from "@alirya/validator/validatable/callback-function-parameters";
import NullGuard from "../boolean/null";
export default function NullParameters(value, message /* = NullMessage*/) {
    return Callback(value, NullGuard, message);
}
//# sourceMappingURL=null-parameters.js.map