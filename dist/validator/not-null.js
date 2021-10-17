import NotNullValidatable from "../validatable/not-null";
import NotNullMessage from "../validatable/string/not-null";
export default function NotNull(message = NotNullMessage) {
    return function (value) {
        return NotNullValidatable(value, message);
    };
}
//# sourceMappingURL=not-null.js.map