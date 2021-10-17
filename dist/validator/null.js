import NullValidatable from "../validatable/null";
import NullMessage from "../validatable/string/null";
export default function Null(message = NullMessage) {
    return function (value) {
        return NullValidatable(value, message);
    };
}
//# sourceMappingURL=null.js.map