import { ITraitSerializer } from "./ITraitSerializer";
import { ITrait } from "../models/traits/ITraitOfT";
import { ISerializable } from "./ISerializable";
import { Character } from "../models/Character";

export class CharacterSerializer implements ITraitSerializer {
  serializationIdentifier: string = "de.royderwolf.rpgsheet.character";
  canSerialize(serializationIdentifier: string): boolean {
    return serializationIdentifier === this.serializationIdentifier;
  }

  serialize<T>(
    objectToSerialize: ITrait<T>,
    serializeChildCallback: (child: ISerializable) => string
  ): string {
    if (!this.canSerialize(objectToSerialize.serializationIdentifier)) {
      throw new SerializationError(
        `CharacterSerializer can not serialize objects of kind: ${
          objectToSerialize.SerializationIdentifier
        }`
      );
    }

    var character = objectToSerialize as Character;

    const retval = {
      serializationIdentifier: this.serializationIdentifier,
      name: character.name
    };

    const systemString = serializeChildCallback(character.system);

    retval.system = systemString;

    return retval;
  }
}
