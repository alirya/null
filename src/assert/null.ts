import Guard from '../boolean/null';
import Callback from '@alirya/function/assert/callback';
import NullError from './throwable/null';

export default function Null(
    value : unknown,
    error : (value:unknown)=>Error = NullError.Parameters
) : asserts value is null {

    Callback.Parameters(value, Guard, error);
}
