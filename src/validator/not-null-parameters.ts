import ValidatorAbstract from "@alirya/validator/validator";
import NotNullValidatable from "../validatable/not-null-parameters";
import Instance from "@alirya/validator/validatable/validatable";
import NotNullMessage from "../assert/string/not-null-parameters";
import Static from "@alirya/validator/message/function/static-parameters";

export default function NotNullParameters() : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export default function NotNullParameters<Msg>(
    message : Static<unknown, null, true, false, Msg>
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export default function NotNullParameters<Msg>(
    message : Static<unknown, null, true, false, Msg|string> = NotNullMessage
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>> {

    return function(value) {

        return NotNullValidatable(value, message);

    } as ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>>
}

