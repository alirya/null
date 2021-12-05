import NotNull from "../../../dist/assert/string/not-null-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(NotNull({}, true, 'value')).toBe('value is not null.');

});

it('false', ()=>{

    expect(NotNull({}, false, 'value')).toBe(
        'value must not null.'
    );

});
