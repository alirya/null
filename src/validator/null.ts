import Validator from '@alirya/validator/simple.js';
import NullValidatable from '../validatable/null.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import NullMessage from '../assert/string/null.js';
import {SimpleParameters, SimpleParameter} from '@alirya/validator/message/function/simple.js';

export function NullParameters() : Validator<unknown, null, Readonly<Instance<unknown, string>>>;

export function NullParameters<MessageType>(
    message : SimpleParameters<unknown, null, MessageType>
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>;

export function NullParameters<MessageType>(
    message :  SimpleParameters<unknown, null, MessageType|string> = NullMessage.Parameters
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return NullValidatable.Parameters(value, message);

    } as Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>;
}


export function NullParameter() : Validator<unknown, null, Readonly<Instance<unknown, string>>>;

export function NullParameter<MessageType>(
    message : SimpleParameter<unknown, null, MessageType>
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>;

export function NullParameter<MessageType>(
    message :  SimpleParameter<unknown, null, MessageType|string> = NullMessage.Parameter
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType|string>>> {

    return NullParameters((value, valid) => message({value, valid}));
}


namespace Null {
    export const Parameters = NullParameters;
    export const Parameter = NullParameter;
}
export default Null;
