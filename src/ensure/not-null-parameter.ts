import AssertNotNull from '../assert/nonull';
import NotNullError from '../assert/throwable/nonull-parameters';
import {Union} from 'ts-toolbelt';
import Value from '@alirya/value/value';
import NotNullParameters from './nonull-parameters';

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
