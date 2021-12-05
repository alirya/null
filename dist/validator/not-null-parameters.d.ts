import ValidatorAbstract from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Static from "@dikac/t-validator/message/function/static-parameters";
export default function NotNullParameters(): ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;
export default function NotNullParameters<Msg>(message: Static<unknown, null, true, false, Msg>): ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;
