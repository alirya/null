import Callback from '@alirya/validator/validatable/callback-function-parameters';
import NullGuard from '../boolean/null';
import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import NullMessage from './string/null';

export default function NullParameter<Argument>(
    value : Argument
) : Return<unknown, Argument, null, Readonly<Instance<unknown, string>>>;

export default function NullParameter<MessageType, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType
) : Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>>;

export default function NullParameter<MessageType, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType|string = NullMessage
) : Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>> {

    return <Return<unknown, Argument, null, Readonly<Instance<unknown, MessageType>>>> Callback(value, NullGuard, message);
}
