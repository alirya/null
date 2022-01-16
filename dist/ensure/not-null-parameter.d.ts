import { Union } from "ts-toolbelt";
import Value from "@alirya/value/value";
export default function NotNullParameter<Type>({ error, value }: Value<Type> & {
    error?: (value: unknown) => Error;
}): Union.Exclude<Type, null>;
//# sourceMappingURL=not-null-parameter.d.ts.map