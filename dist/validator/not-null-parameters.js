import NotNullValidatable from "../validatable/nonull-parameters";
import NotNullMessage from "../validatable/string/nonull";
export default function NotNullParameters(message = NotNullMessage) {
    return function (value) {
        return NotNullValidatable(value, message);
    };
}
//# sourceMappingURL=not-null-parameters.js.map