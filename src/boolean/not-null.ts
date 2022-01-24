import Null from './null';
import {Union} from 'ts-toolbelt';

export default function NotNull<Type extends unknown>(value: Type): value is Union.Exclude<Type, null> {

    return !Null(value);
}
