import { IRpgSystem } from "../src/models/IRpgSystem";
import { StringTrait } from "../src/models/traits/StringTrait";
import { Character } from "../src/models/Character";
import { Serializer } from "../src/parser/Serializer";
import { StringSerializer } from "../src/parser/StringSerializer";
import { CharacterSerializer } from "../src/parser/CharacterSerializer";

class TestSystem implements IRpgSystem {
  name: string;
  displayName: string;
  entrypoint: any;
  serializationIdentifier = "test RPG system ID";

  constructor(entrypoint) {
    this.name = "test system";
    this.displayName = "test display name";
    this.entrypoint = entrypoint;
  }
}

class TestSystemSerializer implements ITraitSerializer {
  serializationIdentifier: string = "test RPG system ID";
  canSerialize(serializationIdentifier: string): boolean {
    return serializationIdentifier === this.serializationIdentifier;
  }
  serialize<T>(
    objectToSerialize: ITrait<T>,
    serializeChildCallback: (child: ISerializable) => string
  ): string {
    if (!this.canSerialize(objectToSerialize.serializationIdentifier)) {
      throw new SerializationError(
        `${this.constructor.name} can not serialize objects of kind: ${
          objectToSerialize.serializationIdentifier
        }`
      );
    }

    var theSystem = (objectToSerialize as unknown) as IRpgSystem;

    if (theSystem == null) {
      throw new SerializationError(
        `${
          objectToSerialize.serializationIdentifier
        } could not be converted to stringTrait for serialisation.`
      );
    }

    return theSystem;
  }
}

describe("When serialising a character", () => {
  test("emits something", () => {
    let stringTrait = new StringTrait("name", "value");
    let testSystem = new TestSystem(stringTrait);
    let character = new Character("test name", testSystem);

    let sut = new Serializer([
      new StringSerializer(),
      new CharacterSerializer(),
      new TestSystemSerializer()
    ]);

    let result = sut.serialize(character);

    expect(result).toBe(JSON.stringify(character));
  });
});
