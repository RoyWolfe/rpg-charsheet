import { ITrait } from "../models/traits/ITraitOfT";
import { ISerializable } from "./ISerializable";

export interface ITraitDeserializer {
  serializationIdentifier: string;
  canDeserialize(serializationIdentifier: string): boolean;
  deserialize(
    objectToDeserialize: any,
    deserializeChildCallback: (child: any) => ISerializable
  ): ISerializable;
}
