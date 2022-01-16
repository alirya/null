import NotNullType from '../string/nonull-parameters';
import New from '@alirya/function/new';
import Value from '@alirya/value/value';
import NotNullParameters from './nonull-parameters';

export default function NotNullParameter(
    {
        value,
        error,
        subject,
    } : Value & {
        error ?: (string : string)=>Error,
        subject ?: string
    }
) : Error {

    return NotNullParameters(value, error, subject);
}
