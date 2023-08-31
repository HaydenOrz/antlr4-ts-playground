import { SelectParser } from "../parser/selectParser";
import { getSuggestions } from "../parser/selectParser";

describe('Test Select Parser', () => {
    const selectParser = new SelectParser();

    test('parse sql', () => {
        const parser = selectParser.createParser('SELECT id FRO');
    })

    test('parse sql', () => {
        getSuggestions('SELECT id FRO');
    })


})