import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import NotNullBoolean from "../boolean/not-null";
import NotNullMessage from "../assert/string/not-null-parameters";
export default function NotNullParameters(value, 
// message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType|string = NotNullMessage
message = NotNullMessage) {
    return Callback(value, NotNullBoolean, message);
}
//# sourceMappingURL=not-null-parameters.js.map