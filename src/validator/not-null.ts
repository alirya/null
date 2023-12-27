import ValidatorAbstract from '@axiona/validator/validator.js';
import NotNullValidatable from '../validatable/not-null.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import NotNullMessage from '../assert/string/not-null.js';
import {StaticParameters} from '@axiona/validator/message/function/static.js';
import {StaticParameter} from '@axiona/validator/message/function/static.js';

export function NotNullParameters() : ValidatorAbstract<unknown, null, true, false, string>;

export function NotNullParameters<Msg>(
    message : StaticParameters<unknown, null, true, false, Msg>
) : ValidatorAbstract<unknown, null, true, false, Msg>;

export function NotNullParameters<Msg>(
    message : StaticParameters<unknown, null, true, false, Msg|string> = NotNullMessage.Parameters
) : ValidatorAbstract<unknown, null, true, false, Msg> {

    return function(value) {

        return NotNullValidatable.Parameters(value, message);

    } as ValidatorAbstract<unknown, null, true, false, Msg>;
}



export function NotNullParameter() : ValidatorAbstract<unknown, null, true, false, string>;

export function NotNullParameter<Msg>(
    message : StaticParameter<unknown, null, true, false, Msg>
) : ValidatorAbstract<unknown, null, true, false, string>;

export function NotNullParameter<Msg>(
    message : StaticParameter<unknown, null, true, false, Msg|string> = NotNullMessage.Parameter
) : ValidatorAbstract<unknown, null, true, false, Msg|string> {

    return function<Argument extends null, Type extends unknown>(value: Argument|Type) {

        return NotNullValidatable.Parameter(value, message);

    } as ValidatorAbstract<unknown, null, true, false, Msg|string>;
}



namespace NotNull {
    export const Parameters = NotNullParameters;
    export const Parameter = NotNullParameter;
}
export default NotNull;
