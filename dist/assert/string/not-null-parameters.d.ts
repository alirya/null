/**
 * string intended for not null message
 *
 * @param valid
 * @param value
 * @param subject
 * @param conversion
 */
export default function NotNullParameters(value: unknown, valid: boolean, subject?: string, conversion?: (value: unknown) => string): string;
