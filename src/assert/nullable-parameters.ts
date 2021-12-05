import Guard from "../boolean/null";

export default function NullableParameters<Alternative>(
    value : unknown,
    assert : (value:unknown) => asserts value is Alternative,
    error ?: (value:unknown)=>Error
) : asserts value is (null|Alternative) {

    try {

        if(!Guard(value)) {

            assert(value)
        }

    } catch (e) {

        if(error) {

            throw error(value)
        }

        throw e;
    }

}
