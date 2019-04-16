import { ISerializable } from "../../parser/ISerializable";

export interface ITrait<T> extends ISerializable {
  name: string;
  value: T;
}
