import NotNullType from "../string/not-null-parameters";
import New from "@dikac/t-function/new";
export default function NotNullParameters(value, error = New(Error), subject = '') {
    return error(NotNullType(value, false, subject));
}
//# sourceMappingURL=not-null-parameters.js.map