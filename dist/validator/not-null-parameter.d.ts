import ValidatorAbstract from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Static from "@dikac/t-validator/message/function/static-parameter";
export default function NotNullParameter(): ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;
export default function NotNullParameter<Msg>(message: Static<unknown, unknown, null, true, false, Msg>): ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;
