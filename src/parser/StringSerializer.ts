import { StringTrait } from "../models/traits/StringTrait";
import { SerializerBase } from "./SerializerBase";

export class StringSerializer extends SerializerBase<StringTrait> {
  serializationIdentifier: string = "de.royderwolf.rpgsheet.stringtrait";

  constructor() {
    super();
  }

  serializeCore(
    objectToSerialize: StringTrait,
    serializeChildCallback: (child: ISerializable) => string
  ): unknown {
    return objectToSerialize;
  }
}
