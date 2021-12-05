import NullMessage from "../assert/string/null-parameter";
import NullParameters from "./null-parameters";
export default function NullParameter(message = NullMessage) {
    return NullParameters((value, valid) => message({ value, valid }));
}
//# sourceMappingURL=null-parameter.js.map