import ValidatorAbstract from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotNullValidatable from "../validatable/not-null";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/unambiguous";
import NotNullMessage from "../validatable/string/not-null";

export default function NotNull() : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export default function NotNull<Msg>(
    message : (result:Readonly<Value & Validatable>)=>Msg
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export default function NotNull<Msg>(
    message : (result:Readonly<Value & Validatable>)=>Msg|string = NotNullMessage
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>> {

    return function<Argument extends null, Type extends unknown>(value: Argument|Type) {

        return NotNullValidatable(value, message);

    } as ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>>
}

