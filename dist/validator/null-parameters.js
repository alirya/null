import NullValidatable from "../validatable/null-parameters";
import NullMessage from "../assert/string/null-parameters";
export default function NullParameters(message = NullMessage) {
    return function (value) {
        return NullValidatable(value, message);
    };
}
//# sourceMappingURL=null-parameters.js.map