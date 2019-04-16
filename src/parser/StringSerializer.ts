import { StringTrait } from "../models/traits/StringTrait";
import { SerializerBase } from "./SerializerBase";

//export class StringSerializer implements ITraitSerializer {
export class StringSerializer extends SerializerBase<StringTrait> {
  serializationIdentifier: string = "de.royderwolf.rpgsheet.stringtrait";

  constructor() {
    console.log("In: StringSerializer");
    super();
  }

  serializeCore(
    objectToSerialize: StringTrait,
    serializeChildCallback: (child: ISerializable) => string
  ): unknown {
    return objectToSerialize;
  }
}
