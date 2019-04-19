import { StringTrait } from "../src/models/traits/StringTrait";
import { CollectionTrait } from "../src/models/traits/CollectionTrait";
import { Parser } from "../src/parser/Parser";
import { StringSerializer } from "../src/parser/StringSerializer";
import { CollectionSerializer } from "../src/parser/CollectionSerializer";

describe("When deserialising a string trait", () => {
  test("emits something", () => {
    let stringTrait = new StringTrait("name", "value");
    var json = JSON.stringify(stringTrait);

    let sut = new Parser([new StringParser()]);

    let result = sut.deserialize(json);

    expect(result).toBe(stringTrait);
  });
});

// describe("When serialising a string trait collection", () => {
//   test("emits something", () => {
//     const stringTraits = new Array<StringTrait>();

//     for (let i = 0; i <= 3; i++) {
//       let stringTrait = new StringTrait(`Name ${i}`, `Value ${i}`);
//       stringTraits.push(stringTrait);
//     }

//     let sut = new Serializer([
//       new CollectionSerializer(),
//       new StringSerializer()
//     ]);

//     var collectionTrait = new CollectionTrait(stringTraits);

//     let result = sut.serialize(collectionTrait);

//     expect(result).toBe(JSON.stringify(collectionTrait));
//   });
// });
