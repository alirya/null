import Callback from "@alirya/validator/validatable/callback-function-parameters";
import NotNullBoolean from "../boolean/nonull";
import NotNullMessage from "./string/nonull";
export default function NotNullParameters(value, message = NotNullMessage) {
    return Callback(value, NotNullBoolean, message);
}
//# sourceMappingURL=not-null-parameters.js.map