import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NullMessage from "../../assert/string/null";

export default function Null(object : Readonly<Value & Validatable>) : string {

    return NullMessage(object.valid, object.value)
}
