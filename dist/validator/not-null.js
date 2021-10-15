import NotNullValidatable from "../validatable/not-null";
//
// export default class NotNull<Msg>
//     implements
//         ValidatorAbstract<unknown, null, true, false, Readonly<Instance<null, Msg>>>,
//         Message<(result:Readonly<Value> & Readonly<Validatable>)=>Msg>
// {
//
//     constructor(
//        public message : (result:Readonly<Value & Validatable>)=>Msg
//     ) {
//     }
//
//     validate<Argument extends null>(value: Argument) : Readonly<Instance<Argument, Msg, false>>
//     validate<Argument extends unknown>(value: Argument) : Return<unknown, Argument, null, true, false, Readonly<Instance<Argument, Msg>>>
//     validate<Argument extends unknown>(value: Argument) {
//
//         return NotNullValidatable(value, this.message);
//     }
// }
export default function NotNull(message) {
    return function (value) {
        return NotNullValidatable(value, message);
    };
}
//# sourceMappingURL=not-null.js.map