import {Union} from "ts-toolbelt"
import Value from "@dikac/t-value/value";
import NotNullParameters from "./not-null-parameters";

export default function NotNullParameter<Type>(
    {
        error,
        value
    } : Value<Type> & {
        error ?: (value:unknown)=>Error
    }
) : Union.Exclude<Type, null>  {

    return NotNullParameters(value, error);
}
