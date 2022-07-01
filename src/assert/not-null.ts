import Guard from '../boolean/not-null';
import Callback from '@alirya/function/assert/callback';
import NotNullError from './throwable/not-null';
import {Union} from 'ts-toolbelt';

export default function NotNull<Type>(
    value : Type,
    error : (value:unknown)=>Error = NotNullError.Parameters
) : asserts value is Union.Exclude<Type, null> {

    Callback.Parameters(value, Guard, error);
}
