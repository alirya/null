import NotNullType from "../string/nonull-parameters";
import New from "@alirya/function/new";
export default function NotNullParameters(value, error = New(Error), subject = '') {
    return error(NotNullType(value, false, subject));
}
//# sourceMappingURL=not-null-parameters.js.map