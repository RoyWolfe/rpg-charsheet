import { ITraitSerializer } from "./ITraitSerializer";
import { ISerializable } from "./ISerializable";
import { SerializationError } from "./SerializationError";

export class Serializer {
  constructor(serializers: Array<ITraitSerializer>) {
    console.log("In: Serializer");
    if (serializers != null && serializers.length > 0) {
      serializers.forEach(item => {
        this.serialiserByTraitIdenfier[item.serializationIdentifier] = item;
      });
    }

    this.haveBeenCalled = false;
  }

  serialiserByTraitIdenfier: object = {};

  serialize<T>(obj: ISerializable): string {
    const convertedObject = this.serializeCore(obj);
    const serializedObject = JSON.stringify(convertedObject);

    return serializedObject;
  }

  serializeCore<T>(obj: ISerializable): string {
    const targetSerializer = this.serialiserByTraitIdenfier[
      obj.serializationIdentifier
    ];

    if (targetSerializer == null) {
      const errMsg = `Could not find a serializer for object kind: ${
        obj.serializationIdentifier
      }`;

      throw new Error(JSON.stringify(obj));
      //throw new Error(errMsg);
      //throw new SerializationError(errMsg);
    }

    const convertedObject = targetSerializer.serialize(obj, item =>
      this.serializeCore(item)
    );
    return convertedObject;
  }
}
