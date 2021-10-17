import Callback from "@dikac/t-validator/validatable/callback";
import NotNullBoolean from "../boolean/not-null";
export default function NotNull(value, message) {
    return Callback(value, NotNullBoolean, message);
}
//# sourceMappingURL=not-null.js.map