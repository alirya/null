import {NullParameters} from '../../../dist/assert/string/null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true', ()=>{

    expect(NullParameters({}, true, 'value')).toBe(
        'value is null.'
    );

});

it('false', ()=>{

    expect(NullParameters({}, false, 'value')).toBe(
        'value must null, actual object.'
    );

});
