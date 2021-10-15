import Null from "./null";
import NullMessage from "../validatable/string/null";
import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function NullStandard() : Validator<unknown, null, Readonly<Instance<unknown, string>>> {

    return Null(NullMessage)
}
