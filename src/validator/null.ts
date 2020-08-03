import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import UndefinedValidatable from "../validatable/null";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/parameter/instance/instance";
import Return from "@dikac/t-validator/return/return";

export default class Null<MessageT>
    implements
        Validator<unknown, null, Readonly<Instance<unknown, MessageT>>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], MessageT>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], MessageT>
    ) {
    }

    validate<Argument extends unknown>(value: Argument) : Return<unknown, Argument, null, Readonly<Instance<unknown, MessageT>>> {

        return <Return<unknown, Argument, null, Readonly<Instance<unknown, MessageT>>>> UndefinedValidatable(value, this.message);
    }
}
