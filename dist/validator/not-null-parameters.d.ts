import ValidatorAbstract from "@alirya/validator/validator";
import Instance from "@alirya/validator/validatable/validatable";
import Static from "@alirya/validator/message/function/static-parameters";
export default function NotNullParameters(): ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;
export default function NotNullParameters<Msg>(message: Static<unknown, unknown, null, true, false, Msg>): ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;
//# sourceMappingURL=not-null-parameters.d.ts.map