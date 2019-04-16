import { ITraitSerializer } from "./ITraitSerializer";
import { ITrait } from "../models/traits/ITraitOfT";
import { ISerializable } from "./ISerializable";
import { CollectionTrait } from "../models/traits/CollectionTrait";
import { SerializationError } from "./SerializationError";

export class CollectionSerializer extends ITraitSerializer {
  constructor() {
    console.log("In: CollectionSerializer");
  }

  serializationIdentifier: string = "de.royderwolf.rpgsheet.collectiontrait";

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

    var collectionTrait = (objectToSerialize as unknown) as CollectionTrait<T>;

    if (collectionTrait == null) {
      throw new SerializationError(
        `${
          objectToSerialize.serializationIdentifier
        } could not be converted to collectionTrait for serialisation.`
      );
    }

    console.log(collectionTrait);
    throw new Error("halp!");

    return collectionTrait;
  }
}
