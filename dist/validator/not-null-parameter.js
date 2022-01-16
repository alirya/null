import NotNullValidatable from "../validatable/nonull-parameters";
import NotNullMessage from "../validatable/string/nonull";
export default function NotNullParameter(message = NotNullMessage) {
    return function (value) {
        return NotNullValidatable(value, message);
    };
}
//# sourceMappingURL=not-null-parameter.js.map