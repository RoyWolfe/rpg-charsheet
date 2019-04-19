import { StringTrait } from "../src/models/traits/StringTrait";
import { CollectionTrait } from "../src/models/traits/CollectionTrait";
import { Parser } from "../src/parser/Parser";
import { StringParser } from "../src/parser/StringParser";
import { CollectionParser } from "../src/parser/CollectionParser";

describe("When deserialising a string trait", () => {
  test("emits something", () => {
    let stringTrait = new StringTrait("name", "value");
    let json = JSON.stringify(stringTrait);

    let sut = new Parser([new StringParser()]);

    let result = sut.deserialize(json);

    expect(result).toEqual(stringTrait);
  });
});

describe("When serialising a string trait collection", () => {
  test("emits something", () => {
    const stringTraits = new Array<StringTrait>();

    for (let i = 0; i <= 3; i++) {
      let stringTrait = new StringTrait(`Name ${i}`, `Value ${i}`);
      stringTraits.push(stringTrait);
    }

    let sut = new Parser([new CollectionParser(), new StringParser()]);

    let collectionTrait = new CollectionTrait(stringTraits);
    let json = JSON.stringify(collectionTrait);

    let result = sut.deserialize(json);

    expect(result).toEqual(collectionTrait);
  });
});
