import { ISerializable } from "./ISerializable";
import { ITraitDeserializer } from "./ITraitDeserializer";
import { CollectionTrait } from "../models/traits/CollectionTrait";
import { SerializationError } from "./SerializationError";

export class CollectionParser implements ITraitDeserializer {
  serializationIdentifier: string = "de.royderwolf.rpgsheet.collectiontrait";

  canDeserialize(serializationIdentifier: string): boolean {
    return serializationIdentifier === this.serializationIdentifier;
  }

  deserialize<T>(
    newObj: any,
    serializeChildCallback: (child: any) => ISerializable
  ): ISerializable {
    if (!this.canDeserialize(newObj.serializationIdentifier)) {
      throw new SerializationError(
        `${this.constructor.name} can not serialize objects of kind: ${
          newObj.serializationIdentifier
        }`
      );
    }

    var collectionTrait = (newObj as unknown) as CollectionTrait<T>;

    if (collectionTrait == null) {
      throw new SerializationError(
        `${
          newObj.serializationIdentifier
        } could not be converted to collectionTrait for deserialisation.`
      );
    }

    return collectionTrait;
  }
}
