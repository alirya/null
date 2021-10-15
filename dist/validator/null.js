import NullValidatable from "../validatable/null";
export default function Null(message) {
    return function (value) {
        return NullValidatable(value, message);
    };
}
//# sourceMappingURL=null.js.map