import NotNullType from "../string/nonull-parameters";
import New from "@alirya/function/new";

export default function NotNullParameters(
    value : unknown,
    error : (string : string)=>Error = New(Error),
    subject : string = ''
) : Error {

    return error(NotNullType(value, false, subject))
}
