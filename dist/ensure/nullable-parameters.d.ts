export default function NullableParameters<Alternative>(value: unknown, ensure: (value: unknown) => Alternative, error?: (value: unknown) => Error): Alternative | null;
