import AssertNotNull from "../assert/nonull";
import NotNullError from "../assert/throwable/nonull-parameters";
import {Union} from "ts-toolbelt"

export default function NotNullParameters<Type>(
    value : Type,
    error : (value:unknown)=>Error = NotNullError
) : Union.Exclude<Type, null>  {

    AssertNotNull(value, error);

    return value;
}
