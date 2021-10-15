import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function NotNull<Msg>(message: (result: Readonly<Value & Validatable>) => Msg): ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>>;
