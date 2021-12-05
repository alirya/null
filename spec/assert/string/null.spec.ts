import Null_ from "../../../dist/assert/string/null-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true', ()=>{

    expect(Null_({}, true, 'value')).toBe(
        'value is null.'
    );

});

it('false', ()=>{

    expect(Null_({}, false, 'value')).toBe(
        'value must null, actual object.'
    );

});
