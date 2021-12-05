import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NullValidatable from "../validatable/null-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
import NullMessage from "../assert/string/null-parameters";
import Dynamic from "@dikac/t-validator/message/function/simple-parameters";
import Simplest from "@dikac/t-validator/message/function/simplest-parameters";
import Simple from "@dikac/t-validator/message/function/simple-parameters";

export default function NullParameters() : Validator<unknown, null, Readonly<Instance<unknown, string>>>

export default function NullParameters<MessageType>(
    message : Simplest<unknown, null, MessageType>
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>

export default function NullParameters<MessageType>(
    // message :  Simplest<unknown, null, MessageType|string> = NullMessage
    message :  Simple<unknown, null, MessageType|string> = (value, valid) => {

        if(valid) {

            const nulls : null = value;
            const nulls2 : number = value;

        } else {

            const nulls : number = value;
        }

        return '';
    }
) : Validator<unknown, null, Readonly<Instance<unknown, MessageType>>> {


    message(null, true);
    message(1, false);
    message(1, true);
    message(1, false);
    message({}, false);
    // message(null as unknown, false);
    // message(null as any, false);
    // message(null as never, false);
    // message(null as unknown, false as boolean);
    // message(null as any, false as boolean);
    // message(1, false);

    return function (value) {

        return NullValidatable(value, message);

    } as Validator<unknown, null, Readonly<Instance<unknown, MessageType>>>
}
