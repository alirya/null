import Guard from '../boolean/null.js';
import Callback from '@alirya/function/assert/callback.js';
import NullError from './throwable/null.js';

export default function Null(
    value : unknown,
    error : (value:unknown)=>Error = NullError.Parameters
) : asserts value is null {

    Callback.Parameters(value, Guard, error);
}
