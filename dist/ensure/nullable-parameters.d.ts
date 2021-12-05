export default function NullableParameters<Alternative>(value: unknown, ensure: (value: unknown) => asserts value is Alternative, error?: (value: unknown) => Error): Alternative | null;
