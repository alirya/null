import Guard from "../boolean/nonull";
import Callback from "@alirya/function/assert/callback-parameters";
import NotNullError from "./throwable/nonull-parameters";
export default function NotNull(value, error = NotNullError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=not-null.js.map