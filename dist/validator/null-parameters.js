import NullValidatable from "../validatable/null-parameters";
export default function NullParameters(
// message :  Simplest<unknown, null, MessageType|string> = NullMessage
message = (value, valid) => {
    if (valid) {
        const nulls = value;
        const nulls2 = value;
    }
    else {
        const nulls = value;
    }
    return '';
}) {
    message(null, true);
    message(1, false);
    message(1, true);
    message(1, false);
    message({}, false);
    // message(null as unknown, false);
    // message(null as any, false);
    // message(null as never, false);
    // message(null as unknown, false as boolean);
    // message(null as any, false as boolean);
    // message(1, false);
    return function (value) {
        return NullValidatable(value, message);
    };
}
//# sourceMappingURL=null-parameters.js.map