import NotNull from "./not-null";
import NullMessage from "../validatable/string/not-null";
import ValidatorAbstract from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function NotNullStandard() : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>  {

    return NotNull(NullMessage)
}
