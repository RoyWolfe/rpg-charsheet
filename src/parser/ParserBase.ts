import { ITraitDeserializer } from "./ITraitDeserializer";
import { ITrait } from "../models/traits/ITraitOfT";
import { SerializationError } from "../parser/SerializationError";
import { ISerializable } from "./ISerializable";

export abstract class ParserBase<TTarget extends ITrait<T>>
  implements ITraitDeserializer {
  canDeserialize(serializationIdentifier: string): boolean {
    return serializationIdentifier === this.serializationIdentifier;
  }

  deserialize<T>(
    objectToSerialize: any,
    deserializeChildCallback: (child: any) => ISerializable
  ): TTarget {
    if (!this.canDeserialize(objectToSerialize.serializationIdentifier)) {
      throw new SerializationError(
        `${this.constructor.name} can not deserialize objects of kind: ${
          objectToSerialize.serializationIdentifier
        }`
      );
    }

    const convertedObject = (objectToSerialize as unknown) as TTarget;

    if (convertedObject == null) {
      throw new SerializationError(
        `${
          objectToSerialize.serializationIdentifier
        } could not be converted to ${typeof TTarget} for serialisation.`
      );
    }

    const retval = this.deserializeCore(
      convertedObject,
      deserializeChildCallback
    );

    return retval;
  }

  abstract deserializeCore(
    objectToSerialize: any,
    deserializeChildCallback: (child: any) => ISerializable
  ): TTarget;
}
