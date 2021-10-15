import ValidatorAbstract from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function NotNullStandard(): ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;
