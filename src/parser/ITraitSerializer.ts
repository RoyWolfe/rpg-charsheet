import { ITrait } from "../models/traits/ITraitOfT";
import { ISerializable } from "./ISerializable";

export interface ITraitSerializer {
  serializationIdentifier: string;
  canSerialize(serializationIdentifier: string): boolean;
  serialize<T>(
    objectToSerialize: ITrait<T>,
    serializeChildCallback: (child: ISerializable) => string
  ): string;
}
