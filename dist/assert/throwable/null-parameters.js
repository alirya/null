import NullType from "../string/null-parameters";
import New from "@dikac/t-function/new";
export default function NullParameters(value, error = New(Error), subject = '') {
    return error(NullType(value, false, subject));
}
//# sourceMappingURL=null-parameters.js.map