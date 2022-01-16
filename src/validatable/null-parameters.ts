import Callback from '@alirya/validator/validatable/callback-function-parameters';
import NullGuard from '../boolean/null';
import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import Dynamic from '@alirya/validator/message/function/simple-parameters';

export default function NullParameters<Argument>(
    value : Argument
) : Return<unknown, Argument, null, Readonly<Instance<unknown, string>>>;

export default function NullParameters<MessageType, Argument>(
    value : Argument,
    message : Dynamic</*unknown,*/ Argument, null, MessageType>
) : Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>>;

export default function NullParameters<MessageType, Argument>(
    value : Argument,
    message : Dynamic</*unknown,*/ Argument, null, MessageType|string>/* = NullMessage*/
) : Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>> {

    return <Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>>> Callback(value, NullGuard, message);
}
