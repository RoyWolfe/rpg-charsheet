import { ITraitSerializer } from "./ITraitSerializer";
import { ITrait } from "../models/traits/ITraitOfT";
import { SerializationError } from "../parser/SerializationError";

export abstract class SerializerBase<TTarget extends ITrait<T>>
  implements ITraitSerializer {
  canSerialize(serializationIdentifier: string): boolean {
    return serializationIdentifier === this.serializationIdentifier;
  }

  serialize<T>(
    objectToSerialize: TTarget,
    serializeChildCallback: (child: ISerializable) => string
  ): unknown {
    if (!this.canSerialize(objectToSerialize.serializationIdentifier)) {
      throw new SerializationError(
        `${this.constructor.name} can not serialize objects of kind: ${
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

    const retval = this.serializeCore(convertedObject, serializeChildCallback);

    return retval;
  }

  abstract serializeCore(
    objectToSerialize: TTarget,
    serializeChildCallback: (child: ISerializable) => string
  ): string;
}
