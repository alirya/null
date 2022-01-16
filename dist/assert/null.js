import Guard from "../boolean/null";
import Callback from "@alirya/function/assert/callback-parameters";
import NullError from "./throwable/null-parameters";
export default function Null(value, error = NullError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=null.js.map