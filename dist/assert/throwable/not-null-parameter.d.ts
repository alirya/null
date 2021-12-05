import Value from "@dikac/t-value/value";
export default function NotNullParameter({ value, error, subject, }: Value & {
    error?: (string: string) => Error;
    subject?: string;
}): Error;
