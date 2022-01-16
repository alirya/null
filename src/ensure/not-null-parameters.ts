import AssertNotNull from '../assert/not-null';
import NotNullError from '../assert/throwable/not-null-parameters';
import {Union} from 'ts-toolbelt';

export default function NotNullParameters<Type>(
    value : Type,
    error : (value:unknown)=>Error = NotNullError
) : Union.Exclude<Type, null>  {

    AssertNotNull(value, error);

    return value;
}
