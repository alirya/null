import Value from "@alirya/value/value";
import Callback from "@alirya/function/callback/callback";
export default function NullableParameter<Alternative>({ value, callback, error, }: Value & Callback<(value: unknown) => asserts value is Alternative> & {
    error?: (value: unknown) => Error;
}): Alternative | null;
//# sourceMappingURL=nullable-parameter.d.ts.map