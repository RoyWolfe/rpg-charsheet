import { StringTrait } from "../src/models/traits/StringTrait";
import { CollectionTrait } from "../src/models/traits/CollectionTrait";
import { Serializer } from "../src/parser/Serializer";
import { StringSerializer } from "../src/parser/StringSerializer";
import { CollectionSerializer } from "../src/parser/CollectionSerializer";

describe("When serialising a string trait", () => {
  test("emits something", () => {
    let stringTrait = new StringTrait("name", "value");

    let sut = new Serializer([new StringSerializer()]);

    let result = sut.serialize(stringTrait);

    expect(result).toBe(JSON.stringify(stringTrait));
  });
});

describe("When serialising a string trait collection", () => {
  test("emits something", () => {
    const stringTraits = new Array<StringTrait>();

    for (let i = 0; i <= 3; i++) {
      let stringTrait = new StringTrait(`Name ${i}`, `Value ${i}`);
      stringTraits.push(stringTrait);
    }

    let sut = new Serializer([
      new CollectionSerializer(),
      new StringSerializer()
    ]);

    var collectionTrait = new CollectionTrait(stringTraits);

    let result = sut.serialize(collectionTrait);

    expect(result).toBe(JSON.stringify(collectionTrait));
  });
});
