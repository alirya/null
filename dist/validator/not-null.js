import NotNullValidatable from "../validatable/not-null";
export default function NotNull(message) {
    return function (value) {
        return NotNullValidatable(value, message);
    };
}
//# sourceMappingURL=not-null.js.map