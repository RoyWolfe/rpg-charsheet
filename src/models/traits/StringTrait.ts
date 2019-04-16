import { ITrait } from "./ITraitOfT";

export class StringTrait implements ITrait<string> {
  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }

  name: string;
  value: string;
  serializationIdentifier: string = "de.royderwolf.rpgsheet.stringtrait";
}
