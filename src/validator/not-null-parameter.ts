import ValidatorAbstract from "@dikac/t-validator/validator";
import NotNullValidatable from "../validatable/not-null-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import NotNullMessage from "../assert/string/not-null-parameter";
import Static from "@dikac/t-validator/message/function/static-parameter";

export default function NotNullParameter() : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export default function NotNullParameter<Msg>(
    message : Static<unknown, null, true, false, Msg>
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export default function NotNullParameter<Msg>(
    message : Static<unknown, null, true, false, Msg|string> = NotNullMessage
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>> {

    return function<Argument extends null, Type extends unknown>(value: Argument|Type) {

        return NotNullValidatable(value, message);

    } as ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>>
}

