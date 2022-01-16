import Value from "@alirya/value/value";
export default function NotNullParameter({ value, error, subject, }: Value & {
    error?: (string: string) => Error;
    subject?: string;
}): Error;
//# sourceMappingURL=not-null-parameter.d.ts.map