import Value from "@dikac/t-value/value";
export default function NullParameter({ value, error, subject, }: Value & {
    error?: (string: string) => Error;
    subject?: string;
}): Error;
