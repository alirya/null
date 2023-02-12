import {NotNullParameters} from '../../../dist/ensure/not-null.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`true`, () => {

     NotNullParameters(true);
});

it(`false`, () => {

     NotNullParameters(false);
});

