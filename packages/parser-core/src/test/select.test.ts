import { SelectParser } from "../parser/selectParser";
import { getSuggestions } from "../parser/selectParser";

describe('Test Select Parser', () => {
    const selectParser = new SelectParser();

    test('validate sql', () => {
        const { errors } = selectParser.parse('SELECT id FRO');
        console.log(errors);
    })

    test('get suggestions', () => {
        getSuggestions('SELECT id FRO');
    })
})