import { ITrait } from "../../../models/traits/ITrait";
import { ICollectionTrait } from "../../../models/traits/ICollectionTrait";

export class WtaTrait implements ITrait {
  constructor() {}

  serializationIdentifier: string = "de.royderwolf.rpgsheet.wta";
  name: string = "de.royderwolf.rpgsheet.wta";
  value: ICollectionTrait<ITrait>;
}
