import Guard from '../boolean/null';
import Callback from '@alirya/function/assert/callback-parameters';
import NullError from './throwable/null-parameters';

export default function Null(
    value : unknown,
    error : (value:unknown)=>Error = NullError
) : asserts value is null {

    Callback(value, Guard, error);
}
