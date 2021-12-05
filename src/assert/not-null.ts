import Guard from "../boolean/not-null";
import Callback from "@dikac/t-function/assert/callback-parameters";
import NotNullError from "./throwable/not-null-parameters";
import {Union} from "ts-toolbelt"

export default function NotNull<Type>(
    value : Type,
    error : (value:unknown)=>Error = NotNullError
) : asserts value is Union.Exclude<Type, null> {

    Callback(value, Guard, error);
}
