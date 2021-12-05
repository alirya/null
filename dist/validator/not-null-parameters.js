import NotNullValidatable from "../validatable/not-null-parameters";
import NotNullMessage from "../assert/string/not-null-parameters";
export default function NotNullParameters(message = NotNullMessage) {
    return function (value) {
        return NotNullValidatable(value, message);
    };
}
//# sourceMappingURL=not-null-parameters.js.map