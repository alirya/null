/**
 * check if value is null or delegate checking to given validator
 */
export default function Nullable<Alternative>(value: unknown, notnull: (value: unknown) => value is Alternative): value is Alternative | null;
//# sourceMappingURL=nullable.d.ts.map