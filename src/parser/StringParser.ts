import { StringTrait } from "../models/traits/StringTrait";
import { ParserBase } from "./ParserBase";
import { ISerializable } from "./ISerializable";

export class StringParser extends ParserBase<StringTrait> {
  serializationIdentifier: string = "de.royderwolf.rpgsheet.stringtrait";

  constructor() {
    super();
  }

  deserializeCore(
    objectToDeserialize: StringTrait,
    serializeChildCallback: (child: any) => ISerializable
  ): unknown {
    return new StringTrait(objectToDeserialize.name, objectToDeserialize.value);
  }
}
