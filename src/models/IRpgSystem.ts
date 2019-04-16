import { ITrait } from "./traits/ITrait";
import { ISerializable } from "../parser/ISerializable";

export interface IRpgSystem extends ISerializable {
  name: string;
  displayName: string;
  entrypoint: ITrait;
}
