import Callback from "@dikac/t-validator/validatable/callback";
import NotNullBoolean from "../boolean/not-null";
import NotNullMessage from "./string/not-null";
export default function NotNull(value, message = NotNullMessage) {
    return Callback(value, NotNullBoolean, message);
}
//# sourceMappingURL=not-null.js.map