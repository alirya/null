import ValidatorAbstract from '@alirya/validator/validator.js';
import NotNullValidatable from '../validatable/not-null.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import NotNullMessage from '../assert/string/not-null.js';
import {StaticParameters} from '@alirya/validator/message/function/static.js';
import {StaticParameter} from '@alirya/validator/message/function/static.js';

export function NotNullParameters() : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export function NotNullParameters<Msg>(
    message : StaticParameters<unknown, null, true, false, Msg>
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export function NotNullParameters<Msg>(
    message : StaticParameters<unknown, null, true, false, Msg|string> = NotNullMessage.Parameters
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>> {

    return function(value) {

        return NotNullValidatable.Parameters(value, message);

    } as ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>>;
}



export function NotNullParameter() : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export function NotNullParameter<Msg>(
    message : StaticParameter<unknown, null, true, false, Msg>
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, string>>>;

export function NotNullParameter<Msg>(
    message : StaticParameter<unknown, null, true, false, Msg|string> = NotNullMessage.Parameter
) : ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>> {

    return function<Argument extends null, Type extends unknown>(value: Argument|Type) {

        return NotNullValidatable.Parameter(value, message);

    } as ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>>;
}



namespace NotNull {
    export const Parameters = NotNullParameters;
    export const Parameter = NotNullParameter;
}
export default NotNull;
