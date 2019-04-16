import { ITrait } from "./ITraitOfT";

export class NumberTrait implements ITrait<number> {
  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }

  name: string;
  value: number;
  serializationIdentifier: string = "de.royderwolf.rpgsheet.numbertrait";
}
