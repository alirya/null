import Static from "@dikac/t-validator/message/function/static-parameters";
import { NotNullParametersType } from "./not-null-parameters";
export type { NotNullParametersType };
export default function NotNullParameters<Argument>(value: Argument): NotNullParametersType<Argument, string>;
export default function NotNullParameters<Argument, MessageType>(value: Argument, message: Static<Argument, null, true, false, MessageType>): NotNullParametersType<Argument, MessageType>;
