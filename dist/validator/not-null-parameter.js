import NotNullValidatable from "../validatable/not-null-parameters";
import NotNullMessage from "../assert/string/not-null-parameter";
export default function NotNullParameter(message = NotNullMessage) {
    return function (value) {
        return NotNullValidatable(value, message);
    };
}
//# sourceMappingURL=not-null-parameter.js.map