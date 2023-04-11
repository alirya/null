/**
 * check if value is null
 */
export default function Null (value : unknown) : value is null {

    return value === null;
}


export {Null as IsNull};