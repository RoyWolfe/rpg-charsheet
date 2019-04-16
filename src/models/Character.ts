import { IRpgSystem } from "./IRpgSystem";
import { ISerializable } from "../parser/ISerializable";

export class Character implements ISerializable {
  constructor(name: string, system: IRpgSystem) {
    this.name = name;
    this.system = system;
  }

  public name: string;
  private system: IRpgSystem;
  serializationIdentifier: string = "de.royderwolf.rpgsheet.character";
}
