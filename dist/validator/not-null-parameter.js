import NotNullValidatable from "../validatable/not-null-parameters";
import NotNullMessage from "../validatable/string/not-null";
export default function NotNullParameter(message = NotNullMessage) {
    return function (value) {
        return NotNullValidatable(value, message);
    };
}
//# sourceMappingURL=not-null-parameter.js.map