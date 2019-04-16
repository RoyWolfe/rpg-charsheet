import { IRpgSystem } from "../../models/IRpgSystem";
import { WtaTrait } from "./Traits/WtaTrait";

export class WtaSystem implements IRpgSystem {
  constructor(entrypoint: WtaTrait) {
    this.entrypoint = entrypoint;
  }

  displayName: string = "Werewolf: The Apocalypse";
  name: string = "WTA";
  entrypoint: any;
  serializationIdentifier: string = "de.royderwolf.rpgsheet.wta.system";
}
