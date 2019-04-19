import { ITraitDeserializer } from "./ITraitDeserializer";
import { ISerializable } from "./ISerializable";
import { SerializationError } from "./SerializationError";

export class Parser {
  constructor(parsers: Array<ITraitDeserializer>) {
    if (parsers != null && parsers.length > 0) {
      parsers.forEach(item => {
        this.parserBySerializationIdenfier[item.serializationIdentifier] = item;
      });
    }
  }

  parserBySerializationIdenfier: object = {};

  deserialize<T>(input: string): ISerializable {
    const objectifiedJson = JSON.parse(input);
    const convertedObject = this.deserializeCore(objectifiedJson);

    return convertedObject;
  }

  deserializeCore<T>(obj: any): ISerializable {
    const objectSerId = obj.serializationIdentifier;

    if (objectSerId == null) {
      throw new SerializationError(
        "Object to parse did not contain a serialization identifier."
      );
    }

    const targetParser = this.parserBySerializationIdenfier[
      obj.serializationIdentifier
    ];

    if (targetParser == null) {
      const errMsg = `Could not find a parser for object kind: ${
        obj.serializationIdentifier
      }`;

      throw new SerializationError(errMsg);
    }

    const convertedObject = targetParser.deserialize(obj, item =>
      this.deserializeCore(item)
    );
    return convertedObject;
  }
}
