import NullType from "../string/null-parameters";
import New from "@alirya/function/new";

export default function NullParameters(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject : string = ''
) : Error {

    return error(NullType(value, false, subject))
}
