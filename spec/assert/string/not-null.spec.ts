import {NotNullParameters} from '../../../dist/assert/string/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

const data = new Map<[boolean, any, string?], string>();

it('true', ()=>{

    expect(NotNullParameters({}, true, 'value')).toBe('value is not null.');

});

it('false', ()=>{

    expect(NotNullParameters({}, false, 'value')).toBe(
        'value must not null.'
    );

});
