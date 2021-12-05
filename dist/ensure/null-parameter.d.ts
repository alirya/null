import Value from "@dikac/t-value/value";
export default function NullParameter({ value, error, }: Value & {
    error?: (value: unknown) => Error;
}): null;
