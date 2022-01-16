import ValidatorAbstract from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import NotNullValidatable from '../validatable/nonull-parameters';
import Instance from '@alirya/validator/validatable/validatable';
import Return from '@alirya/validator/validatable/unambiguous';
import NotNullMessage from '../validatable/string/nonull';
import Static from '@alirya/validator/message/function/static-parameters';

export default function NotNullParameters() : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export default function NotNullParameters<Msg>(
    message : Static<unknown, unknown, null, true, false, Msg>
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export default function NotNullParameters<Msg>(
    message : Static<unknown, unknown, null, true, false, Msg|string> = NotNullMessage
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>> {

    return function<Argument extends null, Type extends unknown>(value: Argument|Type) {

        return NotNullValidatable(value, message);

    } as ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>>;
}

