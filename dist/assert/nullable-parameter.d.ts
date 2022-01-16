import Callback from "@alirya/function/callback/callback";
export default function NullableParameter<Alternative>(value: any, { callback, error, }: Callback<(value: unknown) => asserts value is Alternative> & {
    error?: (value: unknown) => Error;
}): asserts value is null | Alternative;
//# sourceMappingURL=nullable-parameter.d.ts.map