import Validator from '@alirya/validator/simple';
import NullValidatable from '../validatable/null';
import Instance from '@alirya/validator/validatable/validatable';
import NullMessage from '../assert/string/null';
import {SimpleParameters, SimpleParameter} from '@alirya/validator/message/function/simple';

export function NullParameters() : Validator<unknown, null, string>;

export function NullParameters<MessageType>(
    message : SimpleParameters<unknown, null, MessageType>
) : Validator<unknown, null, MessageType>;

export function NullParameters<MessageType>(
    message :  SimpleParameters<unknown, null, MessageType|string> = NullMessage.Parameters
) : Validator<unknown, null, MessageType|string> {

    return function (value) {

        return NullValidatable.Parameters(value, message);

    } as Validator<unknown, null, MessageType|string>;
}


export function NullParameter() : Validator<unknown, null, Readonly<Instance<unknown, string>>>;

export function NullParameter<MessageType>(
    message : SimpleParameter<unknown, null, MessageType>
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>;

export function NullParameter<MessageType>(
    message :  SimpleParameter<unknown, null, MessageType|string> = NullMessage.Parameter
) : Validator<unknown, null, MessageType|string> {

    return NullParameters((value, valid) => message({value, valid}));
}


namespace Null {
    export const Parameters = NullParameters;
    export const Parameter = NullParameter;
}
export default Null;
