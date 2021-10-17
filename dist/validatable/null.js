import Callback from "@dikac/t-validator/validatable/callback";
import NullGuard from "../boolean/null";
import NullMessage from "./string/null";
export default function Null(value, message = NullMessage) {
    return Callback(value, NullGuard, message);
}
//# sourceMappingURL=null.js.map