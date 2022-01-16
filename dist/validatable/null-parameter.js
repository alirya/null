import Callback from "@alirya/validator/validatable/callback-function-parameters";
import NullGuard from "../boolean/null";
import NullMessage from "./string/null";
export default function NullParameter(value, message = NullMessage) {
    return Callback(value, NullGuard, message);
}
//# sourceMappingURL=null-parameter.js.map