import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * string intended for null message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function NullParameter({ value, valid, subject, conversion, }: Value & Validatable & {
    subject?: string;
    conversion?: (value: unknown) => string;
}): string;
