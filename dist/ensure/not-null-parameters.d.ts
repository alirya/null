import { Union } from "ts-toolbelt";
export default function NotNullParameters<Type>(value: Type, error?: (value: unknown) => Error): Union.Exclude<Type, null>;
